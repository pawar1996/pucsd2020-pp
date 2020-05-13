#include <time.h>
#include <string.h>
#include <stdlib.h>
#include"../include/logger.h"

static const char *level_names[] = {
  "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL"
};



FILE *fp ;
static int S_TRACKER; //Keeps track of session

char* print_time()
{
    time_t t;

    t=time(NULL); // for getting current calendar time 
    
    char *timestr = asctime( localtime(&t) );
    timestr[strlen(timestr) - 1] = 0;  //Getting rid of \n
       
    return timestr;
}

void print_log(int level, const char *filename, int line_no, char *fmt,...)
{
  
    if(S_TRACKER > 0)
      fp = fopen ("logfile","a+");
    else
      fp = fopen ("logfile","w");
    
    fprintf(fp,"%s ",print_time());
    fprintf(fp,"[%s: %d] LOG_%-5s: ",filename, line_no, level_names[level]);
    fprintf(fp,"%s",fmt);
    fputc( '\n', fp );
    S_TRACKER++;
    
    fclose(fp);
}


