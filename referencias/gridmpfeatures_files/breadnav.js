/*****
Dynamic Javascript Breadcrumb Navigation by Adam DuVander
http://duvinci.com/projects/javascript/crumbs/

Released under Creative Commons License:
http://creativecommons.org/licenses/by/2.5/
*****/
var crumbsep = " &raquo; ";
var precrumb = "<span class=\"crumb\">";
var postcrumb = "</span>";
var sectionsep = "/";
var rootpath = "/"; // Use "/" for root of domain.
var rootname = "Home";

var ucfirst = 1; // if set to 1, makes "directory" default to "Directory"

var objurl = new Object;
objurl['topics'] = 'All Topics';
objurl['about'] = "Company";
objurl['services'] = 'Services &amp; Support';
objurl['hpc'] = 'HPC';
objurl['life-sciences'] = 'Life Sciences';
objurl['energy-oil-gas'] = 'Energy / Oil & Gas';
objurl['eda'] = 'Electronics Design';
objurl['product'] = 'Products';
objurl['press_2003'] = 'Press 2003';
objurl['press_2004'] = 'Press 2004';
objurl['press_2005'] = 'Press 2005';
objurl['press_2006'] = 'Press 2006';
objurl['press_2007'] = 'Press 2007';
objurl['press_2008'] = 'Press 2008';
objurl['press_2009'] = 'Press 2009';
objurl['press_2010'] = 'Press 2010';
objurl['services-support'] = 'Services & Support';
objurl['about-cloud'] = 'About Cloud';
objurl['managed-services'] = 'For Service Providers';
objurl['grid-mp'] = 'Grid MP';

// Grab the page's url and break it up into directory pieces
var pageurl = (new String(document.location));
var protocol = pageurl.substring(0, pageurl.indexOf("//") + 2);
pageurl = pageurl.replace(protocol, ""); // remove protocol from pageurl
var rooturl = pageurl.substring(0, pageurl.indexOf(rootpath) + rootpath.length); // find rooturl
if (rooturl.charAt(rooturl.length - 1) == "/") //remove trailing slash
{
  rooturl = rooturl.substring(0, rooturl.length - 1);
}
pageurl = pageurl.replace(rooturl, ""); // remove rooturl fro pageurl
if (pageurl.charAt(0) == '/') // remove beginning slash
{
  pageurl = pageurl.substring(1, pageurl.length);
}

var page_ar = pageurl.split(sectionsep);
var currenturl = protocol + rooturl;
var allbread = precrumb + "<a href=\"" + currenturl + "\">" + rootname + "</a>" + postcrumb; // start with root

for (i=0; i < page_ar.length-1; i++)
{
  var displayname = "";
  currenturl += "/" + page_ar[i];
  if (objurl[page_ar[i]])
  {
    displayname = objurl[page_ar[i]];
  }
  else
  {
    if (ucfirst == 1)
    {
      displayname = page_ar[i].charAt(0).toUpperCase() + page_ar[i].substring(1);
    }
    else
    {
      displayname = page_ar[i];
    }
  }
  //if ( i < page_ar.length -2 ) //remove to make last item link
   // { 						   //remove to make last item link
	allbread += crumbsep + precrumb + "<a href=\"" + currenturl + "\">" + displayname + "</a>" + postcrumb; // but keep this line!!!
	//} 							//remove to make last item link
 // else 							//remove to make last item link
   // allbread += crumbsep +  displayname; //remove to make last item link
}
document.write(allbread);
