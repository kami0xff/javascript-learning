console.log("intro");
//was created to make web pages alive indeed html is just a format that the browser renderer
//reads and renders in the page along with css 

//javascript can be written right in the html of the page and automatically 
//runs as the page is loaded 

//javascript programs / scripts are provided as plain text they don't need special 
//preparation / compilation to run

//Javascript nowadays can not only be executed on the browser but also on server or any machine
//that has a javascript engine 
    //the browser has an embeded engine "javascript virtual machine"
        //virtual machine because it can execute the machine code produced by the engine ??

//how does the engine work ?
    //1) reads and parses the plain text script 
    //2) converts the script to machine code
    //3) machine code is run 

    //at all stages the engines are made to perform optimizations to produce the best possible 
    //machine code

//what can javascript do 
    //javascript on the desktop with node can do things such as reading and writing files on the 
    //system as well as performing network requests has access to OS functions as well

    //javascript on the browser does not have read/write access to the files on the clients machine
    //it can allow you to work with files with drag and drop and input tags but not the direct file system of the client
    
    //different tabs / windows generally don't know about each other with javascript 
    //Same origin policy for security some pop up page with some javascript should not be 
    //able to know about mybank.com on the other tab 

    //JavaScript can easily communicate over the net to the server where the current 
    //page came from. But its ability to receive data from other sites/domains is crippled.
    
    //it can modify the HTML on the page 
    //it can read any kind of user input on the page of the browser eg mouse movements clicks keypresses etc 
    //it can send requests over the network to remote servers download and upload files AJAX 
    //get and set cookies ask questions to the visitor show messages
    //it can remember some data on the client side with the local storage 


//