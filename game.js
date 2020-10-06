var noget=0;
var noget1=0;
       
                var name=document.getElementById('name').innerHTML=localStorage.getItem("textvalue");
                var name1=document.getElementById('name1').innerHTML=localStorage.getItem("textvalue1");
        
        
        function create()
        {
                var div1=document.getElementById('create1');
                var button1 = document.createElement("BUTTON");
                var textnode1 = document.createTextNode("Click");
                button1.appendChild(textnode1);
                div1.appendChild(button1);
                button1.id="createbutton1";
                document.getElementById('createbutton1').setAttribute("class","btn btn-warning");
                document.getElementById('createbutton1').setAttribute("onclick","player1()");

        }
        function create1()
        {
                var div=document.getElementById('create');
                var button = document.createElement("BUTTON");
                var textnode = document.createTextNode("Click");
                button.appendChild(textnode);
                div.appendChild(button);
                button.id="createbutton";
                document.getElementById('createbutton').setAttribute("class","btn btn-warning");
                document.getElementById('createbutton').setAttribute("onclick","player2()");
        }
	function player1()
        {
                animation();
	        noget=Math.floor(Math.random()*6)+1;
	        var changeimg="img"+noget+".png";
	        document.getElementById('dice1').setAttribute("src",changeimg);
                var turnover=document.getElementById('createbutton1');
                turnover.remove();
                navigator.vibrate(300);
                create1();
        }
        function player2()
        {
                animation1();
                noget1=Math.floor(Math.random()*6)+1;
	        var changeimg1="img"+noget1+".png";
	        document.getElementById('dice2').setAttribute("src",changeimg1);
                var turnover=document.getElementById('createbutton');
                turnover.remove();
                navigator.vibrate(300);
	        result();
                create();
        }
        function result()
        {
        	if(noget<noget1)
        	{
        		document.getElementById('winner1').innerHTML=name1+" "+"Wins";
                        document.getElementById('winner').innerHTML= name1+" "+"Wins"; 
        	}
        	else if(noget>noget1)
        	{
        		document.getElementById('winner').innerHTML=name+" "+"Wins";
                        document.getElementById('winner1').innerHTML=name+" "+"Wins";
        	}
        	else
        	{
        		document.getElementById('winner').innerHTML="Draw!";
                        document.getElementById('winner1').innerHTML="Draw!";
                        
        	}
        }
        function animation()
        {
                document.getElementById('dice1').setAttribute("class","animated tada");
        }
        function animation1()
        {
                document.getElementById('dice2').setAttribute("class","animated tada");
        }