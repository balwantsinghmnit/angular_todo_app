var module1 = angular.module("module1",[]);
module1.controller("mycont",todo);
	function todo($scope)
	{
		$scope.add = function()
		{
			var val = document.getElementById("task").value;
			if(val=="")
			{
				alert("please write first something!");
			}
			else
			{
				var div = document.createElement("div");
					div.style.background = "purple";
					div.style.color = "white";
					div.style.width=50+"%";
					div.style.borderRadius = 20+"px";
					div.style.marginTop = 5 + "px";
				var btn = document.createElement("button");
					btn.innerHTML = "x";
					btn.style.color = "red";
					btn.style.border = "none";
					btn.style.background = "white;"
					btn.style.borderRadius = 50 + "%";
					btn.style.cursor = "pointer";
					btn.style.width = 20 + "px";
					btn.style.height = 20 + "px";
					btn.style.float = "right";
					btn.style.marginRight = 15 + "px";
					btn.style.marginTop = 15 + "px";
					btn.onclick = function(){div.style.display = "none";}
				var p = document.createElement("p");
					p.innerHTML = val;
				div.appendChild(p);
				div.appendChild(btn);
				var list = document.getElementById("list");
					list.appendChild(div);			
			}
		}

	}
