import jwt from 'jsonwebtoken';

class RoleMiddleware {
  getPayload(roles) {
    return function (req, res, next) {
      if (req.method === 'OPTIONS') {
        next();
      }
      try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
          return res.status(403).json({ message: 'User not authorized' });
        }
        const { roles: userRoles } = jwt.verify(token, process.env.SECRET);
        let hasRole = false;
        userRoles.forEach((role) => {
          if (roles.includes(role)) {
            hasRole = true;
          }
        });
        if (!hasRole) {
          return res.status(403).json({ message: 'No access for this user' });
        }
        next();
      } catch (e) {
        console.log(e);
        return res.status(403).json({ message: 'User not authorized' });
      }
    };
  }
}

export default new RoleMiddleware();
