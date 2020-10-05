var noget=0;
var noget1=0;



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
                document.getElementById('dice1').setAttribute("class","animated tada");
	        noget=Math.floor(Math.random()*6)+1;
	        var changeimg="img"+noget+".png";
	        document.getElementById('dice1').setAttribute("src",changeimg);
                var turnover=document.getElementById('createbutton1');
                turnover.remove();
                create1();
        }
        function player2()
        {
                document.getElementById('dice2').setAttribute("class","animated tada");
                noget1=Math.floor(Math.random()*6)+1;
	        var changeimg1="img"+noget1+".png";
	        document.getElementById('dice2').setAttribute("src",changeimg1);
                var turnover=document.getElementById('createbutton');
                turnover.remove();
	        result();
                create();
        }
        function result()
        {
        	if(noget<noget1)
        	{
        		document.getElementById('winner1').innerHTML="Player2 Wins";
                        document.getElementById('winner').innerHTML="Player1 Loose";
        	}
        	else if(noget>noget1)
        	{
        		document.getElementById('winner').innerHTML="Player1 Wins";
                        document.getElementById('winner1').innerHTML="Player2 Loose";
        	}
        	else
        	{
        		document.getElementById('winner').innerHTML="Draw";
                        document.getElementById('winner1').innerHTML="Draw";
        	}
        }