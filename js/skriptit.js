let myButton = document.querySelector('button');

myButton.onclick = () => {
    styling();
  };

function styling() {

document.getElementsByClassName('rivit-vierekkain')[0].style.display = 'inline-flex';

var harmaaLaatikko = document.getElementsByClassName('laatikko');
for (var i = 0; i < harmaaLaatikko.length; i++)
{
    harmaaLaatikko[i].style.backgroundColor = '#D3D3D3';
    harmaaLaatikko[i].style.marginRight = '1rem';
    harmaaLaatikko[i].style.marginBlock = '1rem'
}

var noBullets = document.getElementsByClassName('no-bullets');
for (var i = 0; i < noBullets.length; i++)
{
    noBullets[i].style.listStyleType = 'none';
}

var jokaToinen = document.getElementsByClassName('joka-toinen-rivi');
for (var i = 0; i < jokaToinen.length; i++)
{
    jokaToinen[i].style.width = '720px';
    jokaToinen[i].style.tableLayout = 'fixed';
}

var jokaPariton = document.getElementsByClassName('joka-pariton-rivi');
for (var i = 0; i < jokaPariton.length; i++)
{
    jokaPariton[i].style.width = '500px';
    jokaPariton[i].style.tableLayout = 'fixed';
}

var even = document.querySelectorAll('.joka-toinen-rivi tr:nth-child(even');
for (var i = 0; i < even.length; i++)
{
    even[i].style.backgroundColor = '#D3D3D3';
}

var odd = document.querySelectorAll('.joka-pariton-rivi tr:nth-child(odd');
for (var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = '#D3D3D3';
}

var links = document.links;
for (var i = 0; i < links.length; i++)
{
    links[i].classList.add('dotted');
}

var linksDotted = document.getElementsByClassName('dotted');
for (var i = 0; i < linksDotted.length; i++)
{
    linksDotted[i].style.color = '#7F170E';
    linksDotted[i].style.fontStyle = 'italic';
    linksDotted[i].style.fontWeight = 'bold';
    linksDotted[i].style.textDecoration = 'underline dashed';
}

var iconPdf = document.createElement('i');
iconPdf.setAttribute('class', 'fa-sharp fa-solid fa-file-pdf');
iconPdf.style.color = '#CC392B';

var iconEmail = document.createElement('i');
iconEmail.setAttribute('class', 'fa-sharp fa-solid fa-envelope');
iconEmail.style.color = '#EE784F';

var iconExternal = document.createElement('i');
iconExternal.setAttribute('class', 'fa-sharp fa-solid fa-arrow-up-right-from-square');
iconExternal.style.color = '#80B284';

var iconExternalClone = iconExternal.cloneNode(true);

function link_is_external(link_element) {
    return (link_element.host !== window.location.host);
}

var link = document.getElementById('externalLink');

for (var i = 0; i < linksDotted.length; i++)
{
    if (link_is_external(linksDotted[i]))
    {
        link.insertBefore(iconExternal, link.childNodes[0]).style.marginRight = '5px';
    }
}

for (var i = 0; i < linksDotted.length; i++) {
    if (linksDotted[i].href.substr(linksDotted[i].href.length - 4) == '.pdf')
    {
        linksDotted[i].appendChild(iconPdf).style.marginLeft = '5px';
    }
}

var emailLink = document.getElementById('emailLink');

for (var i = 0; i < linksDotted.length; i++) {
    if (linksDotted.item(i).protocol == "mailto:")
    {
        emailLink.insertBefore(iconEmail, linksDotted[i]).style.marginRight = '5px';
        emailLink.insertBefore(iconExternalClone, linksDotted[i]).style.marginRight = '5px';
    }
}
}