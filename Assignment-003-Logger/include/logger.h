#ifndef LOGGER_H
#define LOGGER_H

#include <stdio.h>
#include <stdarg.h>


enum {LOG_TRACE, LOG_DEBUG, LOG_INFO, LOG_WARN, LOG_ERROR, LOG_FATAL};

#define log_trace(...) print_log(LOG_TRACE, __FILE__, __LINE__, __VA_ARGS__)
#define log_debug(...) print_log(LOG_DEBUG, __FILE__, __LINE__, __VA_ARGS__)
#define log_info(...) print_log(LOG_INFO, __FILE__, __LINE__, __VA_ARGS__)
#define log_warn(...) print_log(LOG_WARN, __FILE__, __LINE__, __VA_ARGS__)
#define log_error(...) print_log(LOG_ERROR, __FILE__, __LINE__, __VA_ARGS__)
#define log_fatal(...) print_log(LOG_FATAL, __FILE__, __LINE__, __VA_ARGS__)

void print_log(int level, const char *filename, int line_no, char *fmt,...);
//#define LOG_PRINT(...) print_log(LEVEL, __FILE__, __LINE__, __VA_ARGS__ )

#endif
