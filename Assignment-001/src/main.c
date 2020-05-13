#include<stdio.h>
#include<stdlib.h>
#include"../include/headerfile.h"


int main(int argc, char* argv[])
{
  int num1 = 0, num2 = 0, iAns = 0, choice = 0;
  
  
      printf("\nENTER 1st NUMBER  : ");
      scanf("%d", &num1);

      printf("\nENTER 2nd NUMBER : ");
      scanf("%d", &num2);

      printf("\n1.Addition \n2.Subtraction \n3.Multiplication \n4.Division  \n5.Exit\n");
	while(1)
	{
      printf("\nENTER CHOICE : ");
	
      scanf("%d", &choice);

      switch(choice)
	{
	case 1:
	  printf("\nAddition is  %d \n",addition(num1, num2));
	  break;

	case 2:
	  printf("\nSubtraction is  %d \n", substraction(num1, num2));
	  break;

	case 3:
	  printf("\nMultiplication is  %d \n",multiplication(num1, num2));
	  break;

	case 4:
	  printf("\nDivision is  %f \n", division(num1, num2));
	  break;

	case 5:
	  exit(0);

	default:
	  printf("\nENTER CORRECT CHOICE...!!!");
	  break;
	}
    }
  return 0;
}
