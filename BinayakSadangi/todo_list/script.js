window.onload = function () {
    let f = document.getElementById('field');
    let b = document.getElementById('btn');
    let l = document.getElementById('list');
    b.onclick = function () {
        let li = document.createElement('li');
        li.innerText = f.value;
        l.appendChild(li);
        let xbtn = document.createElement('button');
        xbtn.innerText = '❌';
        li.appendChild(xbtn);
        xbtn.onclick = function (event) {
            event.target.parentElement.remove();
        }
        let done = document.createElement('button');
        done.innerHTML = '<b>✔</b>';
        li.appendChild(done);
        done.onclick = function (event) {
            event.target.style.color = 'green';
        }
        let upbtn = document.createElement('button');
        upbtn.innerText = '⬆';
        li.appendChild(upbtn);
        upbtn.onclick = function (event) {
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, event.target.parentElement.previousElementSibling
            )
        }

    }
}