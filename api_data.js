define({ "api": [
  {
    "type": "post",
    "url": "/api/bookings",
    "title": "AddBooking",
    "version": "1.0.0",
    "group": "Booking",
    "name": "AddBooking",
    "description": "<p>Adds New Booking</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "guestFirstName",
            "description": "<p>guest first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "guestLastName",
            "description": "<p>guest last name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>id of the house which the booking was scheduled for</p>"
          },
          {
            "group": "Request body",
            "type": "Date",
            "optional": false,
            "field": "checkInDate",
            "description": "<p>check-in date</p>"
          },
          {
            "group": "Request body",
            "type": "Date",
            "optional": false,
            "field": "checkOutDate",
            "description": "<p>check-out date</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "checkInCompleted",
            "description": "<p>indicates if the check-in was done</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "checkOutCompleted",
            "description": "<p>indicates if the check-out was done</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "checkInBy",
            "description": "<p>id of the the user who took care of the check-in</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "checkOutBy",
            "description": "<p>id of the the user who took care of the check-out</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Added booking.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object containing information about the booking</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates the success of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n {\n     name: \"Added booking\",\n     content: {\n         guestFirstName: \"First\",\n         guestLastName: \"Last\",\n         house: \"sjaa918ahds99aui8\",\n         checkInDate: \"2020-02-20\",\n         checkOutDate: \"2020-02-27\",\n         checkInCompleted: false,\n         checkOutCompleted: false,\n         checkInBy: \"hyg76trafe8aia999\",\n         checkOutBy: \"mnah65432edasqw87\"\n     },\n     status: 200,\n     success: true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not add booking.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not add booking.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/bookings.route.js",
    "groupTitle": "Booking"
  },
  {
    "type": "delete",
    "url": "/api/bookings/:id",
    "title": "DeleteBooking",
    "version": "1.0.0",
    "group": "Booking",
    "name": "DeleteBooking",
    "description": "<p>Removes Booking</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the booking _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record was removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"Record was removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not remove record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not remove record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not remove record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not remove record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/bookings.route.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "/api/bookings/:id",
    "title": "GetBooking",
    "version": "1.0.0",
    "group": "Booking",
    "name": "GetBooking",
    "description": "<p>Gets Booking</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the booking _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "booking",
            "description": "<p>Object containing info about the booking.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking._id",
            "description": "<p>booking id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.guestFirstName",
            "description": "<p>guest first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.guestLastName",
            "description": "<p>guest last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.house",
            "description": "<p>id of the house which the booking was scheduled for</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "booking.checkInDate",
            "description": "<p>check-in date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "booking.checkOutDate",
            "description": "<p>check-out date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "booking.checkInCompleted",
            "description": "<p>indicates if the check-in was done</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "booking.checkOutCompleted",
            "description": "<p>indicates if the check-out was done</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.checkInBy",
            "description": "<p>id of the the user who took care of the check-in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.checkOutBy",
            "description": "<p>id of the the user who took care of the check-out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n     guestFirstName: \"First\",\n     guestLastName: \"Last\",\n     house: \"sjaa918ahds99aui8\",\n     checkInDate: \"2020-02-20\",\n     checkOutDate: \"2020-02-27\",\n     checkInCompleted: false,\n     checkOutCompleted: false,\n     checkInBy: \"hyg76trafe8aia999\",\n     checkOutBy: \"mnah65432edasqw87\"\n     createdAt: '2020-01-30'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get booking.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get booking.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not get booking.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not get booking. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/bookings.route.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "/api/bookings/",
    "title": "GetBookings",
    "version": "1.0.0",
    "group": "Booking",
    "name": "GetBookings",
    "description": "<p>Gets All Bookings</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "bookings",
            "description": "<p>Array containing all bookings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "booking",
            "description": "<p>Object containing info about the booking.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking._id",
            "description": "<p>booking id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.guestFirstName",
            "description": "<p>guest first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.guestLastName",
            "description": "<p>guest last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.house",
            "description": "<p>id of the house which the booking was scheduled for</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "booking.checkInDate",
            "description": "<p>check-in date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "booking.checkOutDate",
            "description": "<p>check-out date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "booking.checkInCompleted",
            "description": "<p>indicates if the check-in was done</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "booking.checkOutCompleted",
            "description": "<p>indicates if the check-out was done</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.checkInBy",
            "description": "<p>id of the the user who took care of the check-in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "booking.checkOutBy",
            "description": "<p>id of the the user who took care of the check-out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n     guestFirstName: \"First\",\n     guestLastName: \"Last\",\n     house: \"sjaa918ahds99aui8\",\n     checkInDate: \"2020-02-20\",\n     checkOutDate: \"2020-02-27\",\n     checkInCompleted: false,\n     checkOutCompleted: false,\n     checkInBy: \"hyg76trafe8aia999\",\n     checkOutBy: \"mnah65432edasqw87\"\n     createdAt: '2020-01-30'\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Failed to connect to DB.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Failed to retrieve bookings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Failed to connect to DB.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Failed to retrieve bookings\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/bookings.route.js",
    "groupTitle": "Booking"
  },
  {
    "type": "put",
    "url": "/api/bookings/:id",
    "title": "UpdateBooking",
    "version": "1.0.0",
    "group": "Booking",
    "name": "UpdateBooking",
    "description": "<p>Updates Booking</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the booking _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "guestFirstName",
            "description": "<p>guest first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "guestLastName",
            "description": "<p>guest last name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>id of the house which the booking was scheduled for</p>"
          },
          {
            "group": "Request body",
            "type": "Date",
            "optional": false,
            "field": "checkInDate",
            "description": "<p>check-in date</p>"
          },
          {
            "group": "Request body",
            "type": "Date",
            "optional": false,
            "field": "checkOutDate",
            "description": "<p>check-out date</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "checkInCompleted",
            "description": "<p>indicates if the check-in was done</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "checkOutCompleted",
            "description": "<p>indicates if the check-out was done</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "checkInBy",
            "description": "<p>id of the the user who took care of the check-in</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "checkOutBy",
            "description": "<p>id of the the user who took care of the check-out</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Booking is now updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not edit booking.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not edit booking.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not edit booking.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not edit booking. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/bookings.route.js",
    "groupTitle": "Booking"
  },
  {
    "type": "post",
    "url": "/api/tasks",
    "title": "AddCustomer",
    "version": "1.0.0",
    "group": "Customer",
    "name": "AddCustomer",
    "description": "<p>Adds New Customer</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>customer first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>customer last name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Added record.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object containing information about the customer</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates the success of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n {\n     name: \"Added record\",\n     content: { obj },\n     status: 200,\n     success: true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not add task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not add record.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customers.route.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/api/customers/:id",
    "title": "DeleteCustomer",
    "version": "1.0.0",
    "group": "Customer",
    "name": "DeleteCustomer",
    "description": "<p>Removes Customer</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the customer _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record was removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"Record was removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not remove record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not remove record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customers.route.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers/:id",
    "title": "GetCustomer",
    "version": "1.0.0",
    "group": "Customer",
    "name": "GetCustomer",
    "description": "<p>Gets Customer</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the customer _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Object containing info about the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer._id",
            "description": "<p>customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.firstName",
            "description": "<p>the customer first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.lastName",
            "description": "<p>the customer last name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "customer.houses",
            "description": "<p>array of the customer houses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n     _id: '12dsaiudsua827ads',\n     firstName: 'customer first name',\n     lastName: 'customer last name',\n     houses: [ houses ],\n     createdAt: '2020-01-30'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get customer.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not get customer.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not get customer. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customers.route.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers/",
    "title": "GetCustomers",
    "version": "1.0.0",
    "group": "Customer",
    "name": "GetCustomers",
    "description": "<p>Gets All Customers</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "customers",
            "description": "<p>Array containing all customers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Object containing info about the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer._id",
            "description": "<p>customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.firstName",
            "description": "<p>the customer first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.lastName",
            "description": "<p>the customer last name</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "customer.houses",
            "description": "<p>array of the customer houses ids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n     _id: '12dsaiudsua827ads',\n     firstName: 'customer first name',\n     lastName: 'customer last name',\n     houses: [ housesIds ],\n     createdAt: '2020-01-30'\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Failed to connect to DB.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Failed to retrieve records</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Failed to connect to DB.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Failed to retrieve records\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customers.route.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/api/customers/:id",
    "title": "UpdateCustomer",
    "version": "1.0.0",
    "group": "Customer",
    "name": "UpdateCustomer",
    "description": "<p>Updates Customer</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the customer _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>the customer first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>the customer last name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Customer is now updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not edit record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not edit record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not edit record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not edit record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/customers.route.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/houses",
    "title": "AddHouse",
    "version": "1.0.0",
    "group": "House",
    "name": "AddHouse",
    "description": "<p>Adds New House</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>label for the house</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>house type</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>house address</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city where the house is located</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>the id of the customer who owns the house</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Added house.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object containing information about the house</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates the success of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n {\n     name: \"Added house\",\n     content: {\n         label: \"house label\",\n         type: \"T3\",\n         address: \"house address\",\n         city: \"some city in Portugal\",\n         owner: \"owner _id\",\n         createdAt: \"2020-01-30\"\n     },\n     status: 200,\n     success: true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not add house.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not add house.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/houses.route.js",
    "groupTitle": "House"
  },
  {
    "type": "delete",
    "url": "/api/houses/:id",
    "title": "DeleteHouse",
    "version": "1.0.0",
    "group": "House",
    "name": "DeleteHouse",
    "description": "<p>Removes House</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the house _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record was removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"Record was removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not remove record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not remove record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not remove record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not remove record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/houses.route.js",
    "groupTitle": "House"
  },
  {
    "type": "get",
    "url": "/api/houses/:id",
    "title": "GetHouse",
    "version": "1.0.0",
    "group": "House",
    "name": "GetHouse",
    "description": "<p>Gets House</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the house _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "house",
            "description": "<p>Object containing info about the house.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house._id",
            "description": "<p>house id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.label",
            "description": "<p>house label</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.type",
            "description": "<p>house type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.address",
            "description": "<p>house address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.city",
            "description": "<p>city where the house is located</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.owner",
            "description": "<p>the id of the customer who owns the house</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "house.tasks",
            "description": "<p>array of ids of tasks scheduled for the house</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "house.bookings",
            "description": "<p>array of ids of bookins scheduled for the house</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n     label: \"house label\",\n     type: \"T3\",\n     address: \"house address\",\n     city: \"some city in Portugal\",\n     owner: \"owner _id\",\n     tasks: [ tasks ids ],\n     bookings: [ bookings ids ]\n     createdAt: \"2020-01-30\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get house.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not get house.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not get house. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/houses.route.js",
    "groupTitle": "House"
  },
  {
    "type": "get",
    "url": "/api/houses/",
    "title": "GetHouses",
    "version": "1.0.0",
    "group": "House",
    "name": "GetHouses",
    "description": "<p>Gets All Houses</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "houses",
            "description": "<p>Array containing all houses.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "house",
            "description": "<p>Object containing info about the house.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house._id",
            "description": "<p>house id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.label",
            "description": "<p>house label</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.type",
            "description": "<p>house type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.address",
            "description": "<p>house address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.city",
            "description": "<p>city where the house is located</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "house.owner",
            "description": "<p>the id of the customer who owns the house</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "house.tasks",
            "description": "<p>array of ids of tasks scheduled for the house</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "house.bookings",
            "description": "<p>array of ids of bookins scheduled for the house</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n     label: \"house label\",\n     type: \"T3\",\n     address: \"house address\",\n     city: \"some city in Portugal\",\n     owner: \"owner _id\",\n     tasks: [ tasks ids ],\n     bookings: [ bookings ids ]\n     createdAt: \"2020-01-30\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Failed to connect to DB.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Failed to retrieve houses.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Failed to connect to DB.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Failed to retrieve houses.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/houses.route.js",
    "groupTitle": "House"
  },
  {
    "type": "put",
    "url": "/api/houses/:id",
    "title": "UpdateHouse",
    "version": "1.0.0",
    "group": "House",
    "name": "UpdateHouse",
    "description": "<p>Updates House</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the house _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>cost of the task</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>indicates if the user is completed</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "completedBy",
            "description": "<p>the id of the user who completed the task</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>the id of the house where the task shall be done</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>the id of the work that shall be done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>House is now updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not edit house.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not edit house.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not edit task.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not edit house. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/houses.route.js",
    "groupTitle": "House"
  },
  {
    "type": "post",
    "url": "/api/tasks",
    "title": "AddTask",
    "version": "1.0.0",
    "group": "Task",
    "name": "AddTask",
    "description": "<p>Adds New Task</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>cost of the task</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>indicates if the user is completed</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "completedBy",
            "description": "<p>the id of the user who completed the task</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>the id of the house where the task shall be done</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>the id of the work that shall be done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Added task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object containing information about the task</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates the success of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n {\n     name: \"Added task\",\n     content: { task },\n     status: 200,\n     success: true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not add task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not add task.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/tasks.route.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/api/tasks/:id",
    "title": "DeleteTask",
    "version": "1.0.0",
    "group": "Task",
    "name": "DeleteTask",
    "description": "<p>Removes Task</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the task _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record was removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"Record was removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not remove record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not remove record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not remove record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not remove record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/tasks.route.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/tasks/:id",
    "title": "GetTask",
    "version": "1.0.0",
    "group": "Task",
    "name": "GetTask",
    "description": "<p>Gets Task</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the task _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "task",
            "description": "<p>Object containing info about the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task._id",
            "description": "<p>task id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "task.cost",
            "description": "<p>cost of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>indicates if the user is completed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.completedBy",
            "description": "<p>the id of the user who completed the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.house",
            "description": "<p>the id of the house where the task shall be done</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.work",
            "description": "<p>the id of the work that shall be done</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n     cost: 10,\n     deadline: '2020-10-09',\n     completed: false,\n     completedBy: '112323k13k1p3k',\n     house: 'adsa21983103ap',\n     work: '1223io1jdakld',\n     createdAt: '2020-01-30'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get task.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not get task.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not get task. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/tasks.route.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/tasks/",
    "title": "GetTasks",
    "version": "1.0.0",
    "group": "Task",
    "name": "GetTasks",
    "description": "<p>Gets All Tasks</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tasks",
            "description": "<p>Array containing all tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "task",
            "description": "<p>Object containing info about the task.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task._id",
            "description": "<p>task id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "task.cost",
            "description": "<p>cost of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>indicates if the user is completed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.completedBy",
            "description": "<p>the id of the user who completed the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.house",
            "description": "<p>the id of the house where the task shall be done</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.work",
            "description": "<p>the id of the work that shall be done</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n     cost: 10,\n     deadline: '2020-10-09',\n     completed: false,\n     completedBy: '112323k13k1p3k',\n     house: 'adsa21983103ap',\n     work: '1223io1jdakld',\n     createdAt: '2020-01-30'\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Failed to connect to DB.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Failed to retrieve records</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Failed to connect to DB.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Failed to retrieve records\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/tasks.route.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "/api/tasks/:id",
    "title": "UpdateTask",
    "version": "1.0.0",
    "group": "Task",
    "name": "UpdateTask",
    "description": "<p>Updates Task</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the task _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>cost of the task</p>"
          },
          {
            "group": "Request body",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>indicates if the task is completed</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "completedBy",
            "description": "<p>the id of the user who completed the task</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "house",
            "description": "<p>the id of the house where the task shall be done</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>the id of the work that shall be done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Task is now updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not edit task.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not edit task.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not edit task.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not edit task. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/tasks.route.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "GetUser",
    "version": "1.0.0",
    "group": "User",
    "name": "GetUser",
    "description": "<p>Gets User</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the user _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Object containing information about the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user.counters",
            "description": "<p>Object containing info about the user counters.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>user first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>user last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>user username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>user email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n     \"counters\": {\n         \"tasks\": 1,\n         \"checkIns\": 1,\n         \"checkOuts\": 1\n     },\n     \"createdAt\": ...\n     \"_id\": ...\n     \"firstName\": \"first name\",\n     \"lastName\": \"last name\",\n     \"username\": \"username\",\n     \"email\": \"user@email.com\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not get record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not get record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "GetUsers",
    "version": "1.0.0",
    "group": "User",
    "name": "GetUsers",
    "description": "<p>Gets All Users</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users[user]",
            "description": "<p>Array containing all users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Object containing info about the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user.counters",
            "description": "<p>Object containing info about the user counters.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>user first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>user last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>user username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>user email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n  \"user\": {\n     \"counters\": {\n         \"tasks\": 1,\n         \"checkIns\": 1,\n          \"checkOuts\": 1\n      },\n      \"createdAt\": ...\n      \"_id\": ...\n       \"firstName\": \"first name\",\n       \"lastName\": \"last name\",\n       \"username\": \"username\",\n       \"email\": \"user@email.com\"\n   }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Failed to connect to DB.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Failed to retrieve records</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Failed to connect to DB.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Failed to retrieve records\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Login",
    "version": "1.0.0",
    "group": "User",
    "name": "PostLogin",
    "description": "<p>Login User</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the user username</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the user password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>You are now logged in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"user\": {\n     \"counters\": {\n         \"tasks\": 1,\n         \"checkIns\": 1,\n          \"checkOuts\": 1\n      },\n      \"createdAt\": ...\n      \"_id\": ...\n       \"firstName\": \"first name\",\n       \"lastName\": \"last name\",\n       \"username\": \"username\",\n       \"email\": \"user@email.com\"\n   },\n \"token\": jwt,\n \"msg\": \"You are now logged in.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Username not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"success\": false\n  \"error\": \"Username not found.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"sucess\": false\n  \"error\": \"Incorrect password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Register",
    "version": "1.0.0",
    "group": "User",
    "name": "PostRegister",
    "description": "<p>Registers New User</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>the user first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>the user last name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the user username</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the user email</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the user password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>the user password confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>User is now registered.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"User is now registered.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Password does not match.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Password does not match.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Username is already taken. Did you forgot your password?\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Email is already registered. Did you forgot your password?\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.route.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "ChangeUserDetails",
    "version": "1.0.0",
    "group": "User",
    "name": "PutChangeUserDetails",
    "description": "<p>Changes User Details</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the user _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>the user first name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>the user last name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the user username</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the user email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Password is now changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"User details are now changed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.route.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/reset-password/:id",
    "title": "ResetPassword",
    "version": "1.0.0",
    "group": "User",
    "name": "PutResetPassword",
    "description": "<p>Resets User Password</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the user _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the user new password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>the user new password confirmation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Password is now changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"Password is now changed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Password does not match.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Password does not match.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/users.route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/works",
    "title": "AddWork",
    "version": "1.0.0",
    "group": "Work",
    "name": "AddWork",
    "description": "<p>Adds New Work</p>",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>work name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>the frequency which the work must be done with</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "advance",
            "description": "<p>the advance in relation to a booking which the work must be done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Added record.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object containing information about the work</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates the success of the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n {\n     name: \"Added record\",\n     content: {\n         name: \"task name\",\n         frequency: \"monthly\",\n         advance: 7\n     },\n     status: 200,\n     success: true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not add record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not add record.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/works.route.js",
    "groupTitle": "Work"
  },
  {
    "type": "delete",
    "url": "/api/works/:id",
    "title": "DeleteWork",
    "version": "1.0.0",
    "group": "Work",
    "name": "DeleteWork",
    "description": "<p>Removes Work</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the task _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record was removed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true,\n  \"msg\": \"Record was removed.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not remove record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not remove record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not remove record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not remove record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/works.route.js",
    "groupTitle": "Work"
  },
  {
    "type": "get",
    "url": "/api/works/:id",
    "title": "GetWork",
    "version": "1.0.0",
    "group": "Work",
    "name": "GetWork",
    "description": "<p>Gets Work</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the work _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "work",
            "description": "<p>Object containing info about the work.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work.name",
            "description": "<p>work name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work.frequency",
            "description": "<p>the frequency which the work must be done with</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "work.advance",
            "description": "<p>the advance in relation to a booking which the work must be done</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n     name: \"work name\",\n     frequency: \"monthly\",\n     advance: 7,\n     createdAt: '2020-01-30'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not get record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not get record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not get record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not get record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/works.route.js",
    "groupTitle": "Work"
  },
  {
    "type": "get",
    "url": "/api/tasks/",
    "title": "GetWorks",
    "version": "1.0.0",
    "group": "Work",
    "name": "GetWorks",
    "description": "<p>Gets All Works</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "works",
            "description": "<p>Array containing all works.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "work",
            "description": "<p>Object containing info about the work.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work.name",
            "description": "<p>work name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "work.frequency",
            "description": "<p>the frequency which the work must be done with</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "work.advance",
            "description": "<p>the advance in relation to a booking which the work must be done</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n[{\n     name: \"work name\",\n     frequency: \"monthly\",\n     advance: 7,\n     createdAt: '2020-01-30'\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Failed to connect to DB.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Failed to retrieve records</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Failed to connect to DB.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Failed to retrieve records\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/works.route.js",
    "groupTitle": "Work"
  },
  {
    "type": "put",
    "url": "/api/works/:id",
    "title": "UpdateWork",
    "version": "1.0.0",
    "group": "Work",
    "name": "UpdateWork",
    "description": "<p>Updates Work</p>",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Request param": [
          {
            "group": "Request param",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>the work _id</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>work name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "frequency",
            "description": "<p>the frequency which the work must be done with</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "advance",
            "description": "<p>the advance in relation to a booking which the work must be done</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record is now updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "String",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the endpoint.</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>Could not edit record.</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Could not edit record.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 401 Not Found\n{\n  \"error\": \"Only authenticated users can access the endpoint.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 400 Error\n{\n  \"error\": \"Could not edit record.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP 404 Not Found\n{\n  \"error\": \"Could not edit record. Cannot find id ...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/works.route.js",
    "groupTitle": "Work"
  }
] });
