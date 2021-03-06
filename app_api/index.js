/* jshint node: true */

//************************************************************
//  index.js                                                //
//  Active Learning 2110                                    //
//                                                          //
//  Created by Odell Mizrahi on 9/18/16.                    //
//  Copyright © 2016 Odell Mizrahi. All rights reserved.    //
//                                                          //
//  Date        Name        Description                     //
//  -------     ---------   --------------                  //
//  18Sep16     O. Mizrahi  Initial Design                  //
//                                                          //
//************************************************************
"use strict";

var userRouter      = require('./routes/userRouter');
var courseRouter    = require('./routes/courseRouter');

module.exports = function(app)
{
    app.use('/users', userRouter);
    app.use('/courses', courseRouter);
};
