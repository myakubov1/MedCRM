function Calendar() {
  return (
        <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Calender</h6>
                    <a href="">Show All</a>
                </div>
                <div id="calender">
                    <div className="bootstrap-datetimepicker-widget usetwentyfour">
                        <ul className="list-unstyled">
                            <li className="show">
                                <div className="datepicker">
                                    <div className="datepicker-days">
                                        <table className="table table-sm">
                                            <thead>
                                            <tr>
                                                <th className="prev" data-action="previous"><span
                                                    className="fa fa-chevron-left" title="Previous Month"></span></th>
                                                <th className="picker-switch" data-action="pickerSwitch" colSpan="5"
                                                    title="Select Month">March 2023
                                                </th>
                                                <th className="next" data-action="next"><span
                                                    className="fa fa-chevron-right" title="Next Month"></span></th>
                                            </tr>
                                            <tr>
                                                <th className="dow">Su</th>
                                                <th className="dow">Mo</th>
                                                <th className="dow">Tu</th>
                                                <th className="dow">We</th>
                                                <th className="dow">Th</th>
                                                <th className="dow">Fr</th>
                                                <th className="dow">Sa</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td data-action="selectDay" data-day="02/26/2023"
                                                    className="day old weekend">26
                                                </td>
                                                <td data-action="selectDay" data-day="02/27/2023"
                                                    className="day old">27
                                                </td>
                                                <td data-action="selectDay" data-day="02/28/2023"
                                                    className="day old">28
                                                </td>
                                                <td data-action="selectDay" data-day="03/01/2023" className="day">1</td>
                                                <td data-action="selectDay" data-day="03/02/2023" className="day">2</td>
                                                <td data-action="selectDay" data-day="03/03/2023" className="day">3</td>
                                                <td data-action="selectDay" data-day="03/04/2023"
                                                    className="day weekend">4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-action="selectDay" data-day="03/05/2023"
                                                    className="day weekend">5
                                                </td>
                                                <td data-action="selectDay" data-day="03/06/2023" className="day">6</td>
                                                <td data-action="selectDay" data-day="03/07/2023" className="day">7</td>
                                                <td data-action="selectDay" data-day="03/08/2023" className="day">8</td>
                                                <td data-action="selectDay" data-day="03/09/2023" className="day">9</td>
                                                <td data-action="selectDay" data-day="03/10/2023" className="day">10
                                                </td>
                                                <td data-action="selectDay" data-day="03/11/2023"
                                                    className="day weekend">11
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-action="selectDay" data-day="03/12/2023"
                                                    className="day weekend">12
                                                </td>
                                                <td data-action="selectDay" data-day="03/13/2023" className="day">13
                                                </td>
                                                <td data-action="selectDay" data-day="03/14/2023" className="day">14
                                                </td>
                                                <td data-action="selectDay" data-day="03/15/2023" className="day">15
                                                </td>
                                                <td data-action="selectDay" data-day="03/16/2023" className="day">16
                                                </td>
                                                <td data-action="selectDay" data-day="03/17/2023" className="day">17
                                                </td>
                                                <td data-action="selectDay" data-day="03/18/2023"
                                                    className="day weekend">18
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-action="selectDay" data-day="03/19/2023"
                                                    className="day weekend">19
                                                </td>
                                                <td data-action="selectDay" data-day="03/20/2023" className="day">20
                                                </td>
                                                <td data-action="selectDay" data-day="03/21/2023" className="day">21
                                                </td>
                                                <td data-action="selectDay" data-day="03/22/2023" className="day">22
                                                </td>
                                                <td data-action="selectDay" data-day="03/23/2023" className="day">23
                                                </td>
                                                <td data-action="selectDay" data-day="03/24/2023" className="day">24
                                                </td>
                                                <td data-action="selectDay" data-day="03/25/2023"
                                                    className="day weekend">25
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-action="selectDay" data-day="03/26/2023"
                                                    className="day active today weekend">26
                                                </td>
                                                <td data-action="selectDay" data-day="03/27/2023" className="day">27
                                                </td>
                                                <td data-action="selectDay" data-day="03/28/2023" className="day">28
                                                </td>
                                                <td data-action="selectDay" data-day="03/29/2023" className="day">29
                                                </td>
                                                <td data-action="selectDay" data-day="03/30/2023" className="day">30
                                                </td>
                                                <td data-action="selectDay" data-day="03/31/2023" className="day">31
                                                </td>
                                                <td data-action="selectDay" data-day="04/01/2023"
                                                    className="day new weekend">1
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-action="selectDay" data-day="04/02/2023"
                                                    className="day new weekend">2
                                                </td>
                                                <td data-action="selectDay" data-day="04/03/2023"
                                                    className="day new">3
                                                </td>
                                                <td data-action="selectDay" data-day="04/04/2023"
                                                    className="day new">4
                                                </td>
                                                <td data-action="selectDay" data-day="04/05/2023"
                                                    className="day new">5
                                                </td>
                                                <td data-action="selectDay" data-day="04/06/2023"
                                                    className="day new">6
                                                </td>
                                                <td data-action="selectDay" data-day="04/07/2023"
                                                    className="day new">7
                                                </td>
                                                <td data-action="selectDay" data-day="04/08/2023"
                                                    className="day new weekend">8
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="datepicker-months" style={{ display: 'none' }}>
                                        <table className="table-condensed">
                                            <thead>
                                            <tr>
                                                <th className="prev" data-action="previous"><span
                                                    className="fa fa-chevron-left" title="Previous Year"></span></th>
                                                <th className="picker-switch" data-action="pickerSwitch" colSpan="5"
                                                    title="Select Year">2023
                                                </th>
                                                <th className="next" data-action="next"><span
                                                    className="fa fa-chevron-right" title="Next Year"></span></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="7"><span data-action="selectMonth"
                                                                      className="month">Jan</span><span
                                                    data-action="selectMonth" className="month">Feb</span><span
                                                    data-action="selectMonth" className="month active">Mar</span><span
                                                    data-action="selectMonth" className="month">Apr</span><span
                                                    data-action="selectMonth" className="month">May</span><span
                                                    data-action="selectMonth" className="month">Jun</span><span
                                                    data-action="selectMonth" className="month">Jul</span><span
                                                    data-action="selectMonth" className="month">Aug</span><span
                                                    data-action="selectMonth" className="month">Sep</span><span
                                                    data-action="selectMonth" className="month">Oct</span><span
                                                    data-action="selectMonth" className="month">Nov</span><span
                                                    data-action="selectMonth" className="month">Dec</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="datepicker-years" style={{ display: 'none' }}>
                                        <table className="table-condensed">
                                            <thead>
                                            <tr>
                                                <th className="prev" data-action="previous"><span
                                                    className="fa fa-chevron-left" title="Previous Decade"></span></th>
                                                <th className="picker-switch" data-action="pickerSwitch" colSpan="5"
                                                    title="Select Decade">2020-2029
                                                </th>
                                                <th className="next" data-action="next"><span
                                                    className="fa fa-chevron-right" title="Next Decade"></span></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="7"><span data-action="selectYear"
                                                                      className="year old">2019</span><span
                                                    data-action="selectYear" className="year">2020</span><span
                                                    data-action="selectYear" className="year">2021</span><span
                                                    data-action="selectYear" className="year">2022</span><span
                                                    data-action="selectYear" className="year active">2023</span><span
                                                    data-action="selectYear" className="year">2024</span><span
                                                    data-action="selectYear" className="year">2025</span><span
                                                    data-action="selectYear" className="year">2026</span><span
                                                    data-action="selectYear" className="year">2027</span><span
                                                    data-action="selectYear" className="year">2028</span><span
                                                    data-action="selectYear" className="year">2029</span><span
                                                    data-action="selectYear" className="year old">2030</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="datepicker-decades" style={{ display: 'none' }}>
                                        <table className="table-condensed">
                                            <thead>
                                            <tr>
                                                <th className="prev" data-action="previous"><span
                                                    className="fa fa-chevron-left" title="Previous Century"></span></th>
                                                <th className="picker-switch" data-action="pickerSwitch"
                                                    colSpan="5">2000-2090
                                                </th>
                                                <th className="next" data-action="next"><span
                                                    className="fa fa-chevron-right" title="Next Century"></span></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="7"><span data-action="selectDecade" className="decade old"
                                                                      data-selection="2006">1990</span><span
                                                    data-action="selectDecade" className="decade"
                                                    data-selection="2006">2000</span><span data-action="selectDecade"
                                                                                           className="decade"
                                                                                           data-selection="2016">2010</span><span
                                                    data-action="selectDecade" className="decade active"
                                                    data-selection="2026">2020</span><span data-action="selectDecade"
                                                                                           className="decade"
                                                                                           data-selection="2036">2030</span><span
                                                    data-action="selectDecade" className="decade"
                                                    data-selection="2046">2040</span><span data-action="selectDecade"
                                                                                           className="decade"
                                                                                           data-selection="2056">2050</span><span
                                                    data-action="selectDecade" className="decade"
                                                    data-selection="2066">2060</span><span data-action="selectDecade"
                                                                                           className="decade"
                                                                                           data-selection="2076">2070</span><span
                                                    data-action="selectDecade" className="decade"
                                                    data-selection="2086">2080</span><span data-action="selectDecade"
                                                                                           className="decade"
                                                                                           data-selection="2096">2090</span><span
                                                    data-action="selectDecade" className="decade old"
                                                    data-selection="2106">2100</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>
                            <li className="picker-switch accordion-toggle"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Calendar;
