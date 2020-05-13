This is a simple logger in C which logs the output of a C program to a file.

It contains 6 function-like macros for logging:

log_trace(...);
log_debug(...);
log_info(...);
log_warn(...);
log_error(...);
log_fatal(...);

Each function takes a printf format string followed by:

	log_info("Hello world!")

outputs the logs to a file "logfile" in the same directory as the logger file with time of compilation, file name from which the log is coming from and Line number at which the log function is called from.
Resulting in a line with the given format:

	Sun Apr  5 14:41:33 2020 [src/main.c: 13] LOG_INFO : Hello world!


How to check output:

1. To build the executable using all c files:

	make build


2. To run the executable:

	make run


3. To delete the executable file:

	make clean



