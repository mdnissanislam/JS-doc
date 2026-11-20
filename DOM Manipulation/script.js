{
    /*
    Phases of dom manupulation:
    01. DOM 💕
    02. Selection of HTML Elements
    03. How to change or manupulation HTML
    04. CSS how to change
    05. Event listeners
    */
    // // Selection of HTML elements
    // let div1 = document.querySelector('div');
    // console.log(div1);
    // console.log(document);
    // console.dir(document);

    // let h1 = document.getElementById('one');
    // h1.innerHTML = 'Hi Can I help you.';
    // let ne = document.getElementsByClassName('two');
    // ne[0].innerHTML = 'red';
    // let newNode = document.getElementById('node');
    // console.log(newNode);
    // console.log(newNode.firstChild);
    // console.log(newNode.childNodes);
    // console.log(newNode.lastChild);

    // // Manupulation HTML
    // let h2 = document.querySelector('h2'); // slect first tag
    // console.log(h2.tagName); // tag
    // console.log(h2.nodeName); // tagName, text node, comment node
    // console.log(h2.firstChild.nodeName);

    /*
    Change:
    tag ❌
    text
    elemen
    attribute
    */
    // tag
    // h2.tagName = 'p';
    // h2.nodeName = 'h5';
    // console.log(h2.tagName); // skip style
    // console.log(h2.nodeName); // skip style

    // // text
    // console.log(h2.innerText); // can't skip styleX
    // console.log(h2.textContent); // skip style
    // console.log(h2.innerHTML); // skip style
    // console.log(h2.firstChild); // skip style

    // Insert elements (addition of elements):
    // Step 01: Creation of element
    let div = document.querySelector('div');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    p.innerText = 'Add new element (p)';
    p2.innerText = 'Add new element afterbegin (p2)';
    console.log(p.innerText)
    div.append(p); // add last
    div.prepend(p); // add first
    div.after(p); // after add
    div.before(p); // before add
    div.insertAdjacentElement("beforeend", p2); // afterend, beforebegin, beforeend

    // You can remove or deletion of elements
    // remove div elment
    // div.remove();
    // remove p element
    // p.remove();

    // Parent node
    let newP = document.querySelector('#p1');
    // console.log(newP);
    // node.parentNode
    let parent = newP.parentNode;
    // console.log(parent);

    // parent methods
    let p3 = document.createElement('p');
    p3.innerText = 'Add new element by parent node.(p3)';
    /*
    parent.replaceChild(newChild, oldChild);
    parent.appendChild(child):
    parent.removeChild(child):
    insertBefore(newNode, referenceNode):
    */
    let newh1 = document.createElement('h1');
    newh1.innerText = 'Hi I am h1 from p1.';
    // replace child
    parent.replaceChild(newh1, newP);
    // new child
    parent.append(p3);
    let p4 = document.querySelector('#p4');
    // removeChild(p4)
    parent.removeChild(p4)
    let p5 = document.querySelector('#p5');
    let p6 = document.createElement('p');
    p6.innerText = 'Add new element by insertBefore(p6,p5).';
    parent.insertBefore(p6,p5);
}

{
    // Attributes:
    // getAttribute(attr): To get the attribute value
    // setAttribute(attr, value): To set the attribute value
    let div = document.querySelector('.box');
    // console.log(div.attributes);
    let classValue = div.getAttribute('class');
    // console.log(classValue)
    console.log(div.attributes.class.value);
    div.setAttribute('class', `${classValue} newMe`);
    console.log(div.attributes.class.value);
    div.setAttribute('style', 'background-color: green;margin-top: 30px');
    let p = document.createElement('p');
    p.innerText = 'Welcome to new world.';
    p.setAttribute('style','color: black;background-color: white;');
    div.append(p);
    console.log(div.innerText);

    // Replace element
    function replaceE(oldE, newE){
        if(oldE instanceof Element){
            let p = document.createElement(newE);
            p.innerText = oldE.innerText;
            for(let attr of oldE.attributes){
                p.setAttribute(attr.name, attr.value);
            }
            oldE.replaceWith(p);
            // p.setAttribute('style', 'background-color: blue');
        }
    }
    let oldE = document.querySelector('.myDiv');
    // oldE.setAttribute('style','background-color: red;');

    let newE = 'h1';

    replaceE(oldE,newE);   
}
{
    let div = document.querySelector('.mydiv');

    // div.className = 'bg';
    div.className = 'bg' // remove first class
    
    // div.classList.add();
    div.classList.add('bgRed'); // append new class but don't remove older class
    
    // div.classList.remove();
    div.classList.remove('bg'); // remove only bg class

    // div.classList.contains(); return true/false
    let isAvailable = div.classList.contains('bg'); // false
    div.classList.toggle('bg'); //
    console.log(isAvailable);
    console.log(div.attributes.class.value);
}
{
    // Qurestion: 01
    // Create a simple website with theme changing functionality.
    let body = document.querySelector('body');
    let button = document.querySelector('#colorChange');
    button.addEventListener('click', ()=>{
        body.classList.toggle('bg-black');
    });
}
