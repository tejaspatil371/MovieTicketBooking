
var totalprice=0;
var seat=[{"categary":"SILVER","quantity":"","seatno":""},{"categary":"GOLD","quantity":"","seatno":""},{"categary":"PLATINUM","quantity":"","seatno":""},{"categary":"RECLANER","quantity":"","seatno":""}]; //array declare
var catprice=[100,200,300,500];
var counts=0;
var countg=0;
var countp=0;	
var countr=0;
var ids=[];
var idg=[];
var idp=[];
var idr=[];
function book(seatcat,sid)
{	

	
	switch(seatcat)
	{
		case 'SILVER': 
		counts++;
		ids.push(sid);
		seat[0].seatno=ids; 
		break;

		case 'GOLD': 
		countg++;
		idg.push(sid);
		seat[1].seatno=idg; 
		break;

		case 'PLATINUM': 
		countp++;
		idp.push(sid);
		seat[2].seatno=idp; 
		break;

		case 'RECLANER': 
		countr++;
		idr.push(sid);
		seat[3].seatno=idr; 
		break;
	}
	for(i=0;i<seat.length;i++)
	{
		switch(seat[i].categary)
		{
			case 'SILVER': 
			seat[i].quantity=counts;
			break;

			case 'GOLD': 
			seat[i].quantity=countg;
			break;

			case 'PLATINUM': 
			seat[i].quantity=countp;
			break;

			case 'RECLANER': 
			seat[i].quantity=countr;
			break;
		}
	}

}
function bill()
{

	totalprice=0;
	console.log(seat)
	var tbody=document.getElementById("tbody");

	for(let i=0;i<seat.length;i++)
	{
		if(seat[i].seatno!=""){

		var tr=document.createElement('TR');
		var td1=document.createElement('TD');
		var td2=document.createElement('TD');
		var td3=document.createElement('TD');
		var td4=document.createElement('TD');

		td1.appendChild(document.createTextNode(seat[i].categary));
		td2.appendChild(document.createTextNode(seat[i].quantity));
		td3.appendChild(document.createTextNode(seat[i].seatno));
		td4.appendChild(document.createTextNode(seat[i].quantity*catprice[i]));

		tbody.appendChild(tr);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		switch(seat[i].categary)
		{
			case 'SILVER': 
			totalprice=totalprice+(catprice[0]*seat[i].quantity);
			
			break;

			case 'GOLD': 
			totalprice=totalprice+(catprice[1]*seat[i].quantity);
			break;

			case 'PLATINUM': 
			totalprice=totalprice+(catprice[2]*seat[i].quantity);
			break;

			case 'RECLANER': 
			totalprice=totalprice+(catprice[3]*seat[i].quantity);
			break;
		}
}
	}
	console.log(totalprice);
	var tr=document.createElement("TR");
	var td5=document.createElement('TD');
	var td6=document.createElement('TD');

	td5.appendChild(document.createTextNode("Totalprice"));
	td6.appendChild(document.createTextNode(totalprice));
	tbody.appendChild(tr);
	tr.appendChild(td5);
	tr.appendChild(td6);
}









