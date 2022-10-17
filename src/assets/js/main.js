'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //BURGER MENU 
    function burger(trig, menu, trigActive, menuActive, closeTrig, overlaySelector, overlayActive) {
        const trigger = document.querySelector(trig);
        const popup = document.querySelector(menu);
        const close = document.querySelector(closeTrig);
        const overlay = document.querySelector(overlaySelector);
        const body = document.querySelector('body');
        
        trigger.addEventListener('click', function() {
            if(!this.classList.contains(trigActive)) {
                this.classList.add(trigActive);
                popup.classList.add(menuActive);
                overlay.classList.add(overlayActive);
                body.style.overflow = "hidden";
            }else {
                this.classList.remove(trigActive);
                popup.classList.remove(menuActive);
                overlay.classList.remove(overlayActive);
                body.style.overflow = 'unset';
            }
        });
        if(close) {
            close.addEventListener('click', () => {
                trigger.classList.remove(trigActive);
                popup.classList.remove(menuActive);
                overlay.classList.remove(overlayActive);
                body.style.overflow = 'unset';
            });
        }
        window.addEventListener('resize', () => {
            overlay.classList.remove(overlayActive);
        })
    }

    burger('.burger-btn', '.burger-menu', 'burger-btn_active', 'burger-menu_active', '.burger-close', '.overlay', 'overlay_active');

    const removeScrollTwitching = () => {
        const body = document.querySelector('body');
    
        let div = document.createElement('div');
        div.style.visibility = 'none';
        div.style.opacity = '0';
        div.style.width = '50px;';
        div.style.height = '50px;';
        div.style.overflow = 'scroll';
        body.appendChild(div);
        
        let offset = div.offsetWidth - div.clientWidth;
        div.remove();
    
        return offset;
    };
    removeScrollTwitching();
    //END BURGER MENU
});

