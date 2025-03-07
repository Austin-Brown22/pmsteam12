const catchAsync = require('./../utils/catchAsync');
const config = require('./../dbconfig');
const sql = require('mssql');

function resolveDates(date) {
    if (date.length === 7) {
        return date.substring(0, 2) + '/' + date.substring(2, 3) + '/' + date.substring(3, date.length);
    }
    else {
        return date.substring(0, 2) + '/' + date.substring(2, 4) + '/' + date.substring(4, date.length);
    }
};

exports.getGeneralReport = catchAsync(async (req, res, next) => {
    let pool = await sql.connect(config);
    // const activeEmployees = await pool.request().query(`SELECT COUNT(*) FROM employees WHERE Employee_Status =1`);


    if (req.params.period === 'today') {
        console.log(resolveDates(req.params.to));
    };

    res.status(200).json({
        status: 'Sucess',

    });
});

