#include"../include/logger.h"

int main()
{
  
  int i=0;
  
  while(i<2)
  {
   /*LOG_PRINT("Welcome ");
   LOG_PRINT("Yashashri..");*/
   
   log_info("Info Messange!");
   log_warn("Warn Message!");
   log_error("Error Message!");
   //log_trace("Trace Messange!");
   //log_debug("Debug Message!");
   //log_fatal("Fatal Message!");
   
   i++;
  }
}
