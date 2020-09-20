
/*
Program Created by: William Brown
Date Created: 09/20/2020
Class written for: CSC 414 Software Engineering I
Program Description:
1. Your menu shall contain at least 10 menu items.
2. Your menu shall contain an exit item selection.
3. Your menu shall contain an error response for invalid entry.
4. Your menu shall display a message indicating that an item is incomplete when selected.
5. Your menu shall be continuously displayed until the exit item is selected.
6. The item selection method is up to the developer.
7. Provide a test results document showing the correct execution via output display captures.

This is a Menu Stubbing Project that will execute single digit commands from 0 to 9.
an Error will happen if you attempt to input double digit commands anything 10 or higher.
*/


#include <stdio.h>
#include <iostream>
int main() {
    using namespace std;
    
    int command;
    
    do{
    cout << "Enter a command from 0 to 9): " << endl  
        << "\t or" << endl << "Enter - 1 to exit." << endl << endl;
    cin >> command;
    
    switch (command)
    {
    case 0:
        cout << "Command 0 was Successfully Executed." << endl;
        break;
    case 1:
        cout << "Command 1 was Successfully Executed." << endl;
        break;
    case 2:
        cout << "Command 2 was Successfully Executed." << endl;
        break;
    case 3:
        cout << "Command 3 was Successfully Executed." << endl;
        break;
    case 4:
        cout << "Command 4 was Successfully Executed." << endl;
        break;
    case 5:
        cout << "Command 5 was Successfully Executed." << endl;
        break;
    case 6:
        cout << "Command 6 was Successfully Executed." << endl;
        break;
    case 7:
        cout << "Command 7 was Successfully Executed." << endl;
        break;
    case 8:
        cout << "Command 8 was Successfully Executed." << endl;
        break;
    case 9:
        cout << "Command 9 was Successfully Executed." << endl;
        break;

    //If command doesn't match any case
    default:
        cout << "Error! This Illegal Input was was not Implemented" << endl;
        cout <<  "\t or" << endl;
        cout << "Enter -1 to exit." << endl << endl;
        break;

    case -1:
        cout << "Exiting Program. Have a Nice Day." << endl;
        break;

    }//End Switch Case
            
        
    } while (command != -1);
    return 0;
    system("pause");
   
}//End Main()

