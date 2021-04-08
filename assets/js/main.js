document.addEventListener("DOMContentLoaded", () => {


    const animatedMasks = document.querySelectorAll('.animated-mask');
    const btnsForMasks = document.querySelectorAll('.header__item');
    const transitionDefault = 'all 0.3s linear';
    const coeff = 50;


    class Scale {
        constructor(data) {
            this.itemsSelector = data.itemsSelector;
            this.btnsSelector = data.btnsSelector;

            this.items = document.querySelectorAll(this.itemsSelector);
            this.btns = document.querySelectorAll(this.btnsSelector);

            this.defaultImgSelector = data.defaultImgSelector;
            this.hoverImgSelector = data.hoverImgSelector;
            this.transition = data.transition || 'all 0.3s linear';
            this.coeff = data.coeff || 50;
            
            this.btnDefaultColor = 'transparent';
            this.btnHoverColor = '#8F6FDB';

            this.init();
        }

        init() {

            
            
            // Animated Masks
            this.items.forEach((item, index) => {

                const height = parseInt(getComputedStyle(item).height.slice(0, -2));
                const width = parseInt(getComputedStyle(item).width.slice(0, -2));

                const prevZindex = getComputedStyle(item).zIndex;

                const hoverImg = item.querySelector(this.hoverImgSelector);


                hoverImg.style.transition = this.transition;


                item.addEventListener('mouseenter', (e) => {

                    if (!item.classList.contains('growth')) {

                        const dataIdOfMask = item.getAttribute('data-id');



                        const newHeight = `${parseInt(height, 10)+coeff}px`;
                        const newWidth = `${parseInt(width, 10)+coeff}px`;

                        hoverImg.classList.add('opacity_1');
                        //console.log(item)

                        item.style.height = newHeight;
                        item.style.width = newWidth;

                        item.style.zIndex = '999999';

                        item.classList.add('growth');


                        this.btns.forEach((item, index) => {
                            const dataIdOfBtn = item.getAttribute('data-id');
                            
                            if(dataIdOfBtn == dataIdOfMask){
                  
                                
                                item.style.background = this.btnHoverColor;
                                item.style.backgroundColor = this.btnHoverColor;
                            }
                            
                        })
                    }


                });

                item.addEventListener('mouseleave', (e) => {
                    if (item.classList.contains('growth')) {
                         const dataIdOfMask = item.getAttribute('data-id');
                        
                        hoverImg.classList.remove('opacity_1');

                        item.style.height = `${height}px`;
                        item.style.width = `${width}px`;

                        item.style.zIndex = prevZindex;

                        //console.log(height);
                        //console.log(width);

                        item.classList.remove('growth')
                        
                        
                        this.btns.forEach((item, index) => {
                            const dataIdOfBtn = item.getAttribute('data-id');
                            
                            if(dataIdOfBtn == dataIdOfMask){
                                console.log(dataIdOfBtn);
                                
                                item.style.background = this.btnDefaultColor;
                                item.style.backgroundColor = this.btnDefaultColor;
                            }
                            
                        })
                    }

                });
            })

            //btns For Masks
            this.btns.forEach((btnItem, index) => {

                let height, width;

                const dataId = btnItem.getAttribute('data-id');

                const elem = document.querySelector(`.animated-mask[data-id=${dataId}]`);

                const prevHeight = parseInt(getComputedStyle(elem).height.slice(0, -2));
                const prevWidth = parseInt(getComputedStyle(elem).width.slice(0, -2));
                const prevZindex = getComputedStyle(elem).zIndex;


                btnItem.addEventListener('mouseenter', () => {

                    if (!elem.classList.contains('growth')) {

                        const newHeight = `${parseInt(prevHeight, 10)+coeff}px`;
                        const newWidth = `${parseInt(prevWidth, 10)+coeff}px`;

                        const hoverImg = elem.querySelector(this.hoverImgSelector);


                        hoverImg.style.transition = this.transition;


                        hoverImg.classList.add('opacity_1');
                        //console.log(item)
                        elem.style.zIndex = '999999';



                        elem.style.height = newHeight;
                        elem.style.width = newWidth;

                        height = prevHeight;
                        width = prevWidth

                        elem.classList.add('growth');

                        
                        btnItem.style.background = this.btnHoverColor;
                        btnItem.style.backgroundColor = this.btnHoverColor;
                    }


                });

                btnItem.addEventListener('mouseleave', () => {
                    const dataId = btnItem.getAttribute('data-id');
                    const elem = document.querySelector(`.animated-mask[data-id=${dataId}]`);
                    //
                    //            console.log('elem mouseleave')
                    //            console.log(elem)

                    if (elem.classList.contains('growth')) {
                        const defaultImg = elem.querySelector('.animated-mask__img_default'),
                            hoverImg = elem.querySelector('.animated-mask__img_hover');

                        //console.log(`mouseleave height: ${height}, width: ${width}`);

                        hoverImg.classList.remove('opacity_1');
                        elem.style.zIndex = prevZindex;


                        elem.style.height = `${height}px`;
                        elem.style.width = `${width}px`;

                        elem.classList.remove('growth')
                        
                        btnItem.style.background = this.btnDefaultColor;
                        btnItem.style.backgroundColor = this.btnDefaultColor;
                    }




                });

            });
        }
    }

    const imgsForHover = new Scale({
        itemsSelector: '.animated-mask',
        btnsSelector: '.header__item',

        defaultImgSelector: '.animated-mask__img_default',
        hoverImgSelector: '.animated-mask__img_hover'
    })


    //preventDefault for first btn


    //    const footerFormCoords = document.querySelector('.footer-form').getBoundingClientRect(); //header before causes, header coords
    //    const footerFormTop = footerFormCoords.top;
    //    
    //    document.querySelector('.item_footer').addEventListener('click', () => {
    //        
    //        
    //        window.scrollTo({
    //            top: footerFormTop,
    //            left: 0,
    //            behavior: "smooth"
    //        })
    //    })

    document.querySelector('.header__button').addEventListener('click', (e) => {

    });

    document.querySelector('.header__star').addEventListener('click', (event) => {
        event.stopPropagation();
    });
})
