var TotalNo=document.querySelectorAll('li');// To calculate number of contacts
var headers=Array.from(TotalNo);
var TotalContact=headers.length;
var ContactsPerPages=10;//Number of Contact can change according to your preference  
var NoOfPages=Math.ceil(TotalContact/ContactsPerPages);
var HtmlOfPageNo="";
var i=1;

//Inserting Contacts According to page number
var TotalNo1=document.querySelectorAll('.contact-item.cf');
var headers1=Array.from(TotalNo1);
var ptoHtml,ptoHtml1="";

//Adding page-number html
while(i<=NoOfPages){
    HtmlOfPageNo+="<li><a href='#' id="+i+" onClick=Display(this.id) >"+i+"</a></li>";
    i++;
}

document.querySelector('#pgNo').insertAdjacentHTML('afterbegin', HtmlOfPageNo);

// when page loades for first time
window.onload = function() {  
  var k,ptoHtml1="",ContactToDisplay=0,CurrentPageNo=1;//Current PAGE-LOAD is 1
     while(i<=NoOfPages){
    HtmlOfPageNo+="<li><a href='#' id="+i+" onClick=Display(this.id) >"+i+"</a></li>";
    i++;
}

for(k=0;k<ContactsPerPages;k++){//Loop used for displaying contact list
  ContactToDisplay= (CurrentPageNo-1)*ContactsPerPages+k;
  ptoHtml= headers1[ContactToDisplay].outerHTML;
  ptoHtml1+=ptoHtml;
  document.querySelector('.contact-list').innerHTML=ptoHtml1;
  }
 }
 // Function to dispay contacts 
function Display(CurrentPageNo){
var k,ptoHtml1="",ContactToDisplay=0,CurrentPageNo;
for(k=0;k<ContactsPerPages;k++){
    ContactToDisplay= (CurrentPageNo-1)*ContactsPerPages+k;
    ptoHtml= headers1[ContactToDisplay].outerHTML;
    ptoHtml1+=ptoHtml;
    document.querySelector('.contact-list').innerHTML=ptoHtml1;
}
}

