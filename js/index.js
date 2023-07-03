function allRemoveClass(target) {
    target.forEach(all => {
        all.classList.remove('on');
    })
}

searchWrap();
nav();
log_join();
recentMusic();
bannerSlide();
chart();
hotNew();
recommend();
video();
notice();

// header
function searchWrap() {
    const searchText = document.querySelector('.search-text');
    const searchBox = document.querySelector('.search-box');
    const placeHolderText = searchText.placeholder;

    //div show evt
    searchText.addEventListener('focus', function () {
        searchBox.classList.add('on');
        searchText.placeholder = '';
    });

    //div hide evt
    document.body.addEventListener('click', function (e) {
        if (!e.target.classList.contains('search-item')) removeClass();
    });

    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('focus', function () {
        removeClass();
        allRemoveClass(document.querySelectorAll('.sub-gnb-list')); //search-btn focus시 sub-gnb-list를 classList.remove/display:none;
    });

    const ginieLogo = document.querySelector('.ginie-logo');
    ginieLogo.addEventListener('focus', function () {
        removeClass();
    });

    function removeClass() {
        searchBox.classList.remove('on');
    }

    //input placeholder null > text
    searchText.addEventListener('blur', function () {
        searchText.placeholder = placeHolderText;
    });

    //search word nav toggle Evt
    const searchTitle = document.querySelectorAll('.search-title > a');
    searchTitle.forEach(item => {
        item.addEventListener('click', function () {
            searchTitle.forEach(all => {
                all.parentElement.classList.remove('on');
                all.parentElement.nextElementSibling.classList.remove('on');
            });
            item.parentElement.classList.add('on');
            item.parentElement.nextElementSibling.classList.add('on');
        });
    });
}
function nav() {
    const subMenu = document.querySelectorAll('.sub-gnb-list');
    const musicHug = document.querySelector('.main-gnb-list > li:last-child > a');

    subMenu.forEach(sub => {
        sub.previousElementSibling.addEventListener('mouseenter', function () {
            this.nextElementSibling.classList.add('on');
        });
        sub.previousElementSibling.addEventListener('focus', function () {
            allRemoveClass(subMenu);
            this.nextElementSibling.classList.add('on');
        });
        sub.parentElement.addEventListener('mouseleave', function () {
            allRemoveClass(subMenu);
        });
    });

    musicHug.addEventListener('focus', function () {
        allRemoveClass(subMenu);
    });

}
function log_join() {
    const btn = document.querySelector('.log-wrap-btn');
    let openCheck = false;
    const logWrap = document.querySelector('.log-wrap');

    btn.addEventListener('click', function () {
        if (!openCheck) {
            this.classList.add('on');
            logWrap.classList.add('on');
            openCheck = true;
        } else {
            this.classList.remove('on');
            logWrap.classList.remove('on');
            openCheck = false;
        }
    });

    document.body.addEventListener('click', function (e) {
        if (!e.target.classList.contains('log-item')) {
            btn.classList.remove('on');
            logWrap.classList.remove('on');
            openCheck = false;
        }
    });
}
//main
function recentMusic() {
    const musicItem = document.querySelectorAll('.music-item');

    //music item line add
    musicItem.forEach(all => {
        if (all.classList.contains('event-line')) {
            all.insertAdjacentHTML('afterbegin', '<div class="event"><span class="blind">이벤트</span></div>');
        }
    });

    //music item hover Evt
    musicItem.forEach(item => {
        item.addEventListener('mouseenter', function () {
            allRemoveClass(musicItem);
            item.classList.add('on');
        });
        item.addEventListener('mouseleave', function () {
            item.classList.remove('on');
        });
    });

    //recent music slide
    general();
    domestic();
    oversea();

    function general() {
        const prev = document.querySelector('.general-list-wrap .prev-btn');
        const next = document.querySelector('.general-list-wrap .next-btn');
        const generalPage = document.querySelectorAll('.general-page');
        let totalNum = document.querySelectorAll('.general-page').length;
        let nowNum = 0;
        const nowNumText = document.querySelector('.general-now');
        document.querySelector('.general-total').innerHTML = totalNum;
        nowNumText.innerHTML = nowNum + 1;

        btnEvt(prev, next, generalPage, nowNum, nowNumText, totalNum);
    }
    function domestic() {
        const prev = document.querySelector('.domestic-list-wrap .prev-btn');
        const next = document.querySelector('.domestic-list-wrap .next-btn');
        const domesticPage = document.querySelectorAll('.domestic-page');
        let totalNum = document.querySelectorAll('.domestic-page').length;
        let nowNum = 0;
        const nowNumText = document.querySelector('.domestic-now');
        document.querySelector('.domestic-total').innerHTML = totalNum;
        nowNumText.innerHTML = nowNum + 1;

        btnEvt(prev, next, domesticPage, nowNum, nowNumText, totalNum);
    }
    function oversea() {
        const prev = document.querySelector('.oversea-list-wrap .prev-btn');
        const next = document.querySelector('.oversea-list-wrap .next-btn');
        const overseaPage = document.querySelectorAll('.oversea-page');
        let totalNum = document.querySelectorAll('.oversea-page').length;
        let nowNum = 0;
        const nowNumText = document.querySelector('.oversea-now');
        document.querySelector('.oversea-total').innerHTML = totalNum;
        nowNumText.innerHTML = nowNum + 1;

        btnEvt(prev, next, overseaPage, nowNum, nowNumText, totalNum);
    }

    function btnEvt(prev, next, target, nowNum, text, totalNum) {
        next.addEventListener('click', function () {
            if (nowNum < totalNum - 1) {
                nowNum++;
                addclassAfterRemove_textModify(target, nowNum, text);
            } else {
                nowNum = 0;
                addclassAfterRemove_textModify(target, nowNum, text);
            }
        });
        prev.addEventListener('click', function () {
            if (nowNum > 0) {
                nowNum--;
                addclassAfterRemove_textModify(target, nowNum, text);
            } else {
                nowNum = totalNum - 1;
                addclassAfterRemove_textModify(target, nowNum, text);
            }
        });
        function addclassAfterRemove_textModify(target, nowNum, text) {
            allRemoveClass(target);
            target[nowNum].classList.add('on');
            target[nowNum].animate([
                { opacity: 0.7 },
                { opacity: 1 }
            ], 500);
            text.innerHTML = nowNum + 1;
        }
    }

    //recent music nav
    const navType = document.querySelectorAll('.recent-type');
    const listWrap = document.querySelectorAll('.list-wrap');

    navType.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            allRemoveClass(navType);
            this.classList.add('on');
            allRemoveClass(listWrap);
            listWrap[index].classList.add('on');
        })
    })
}
function bannerSlide() {
    const dot = document.querySelectorAll('.dot-list > li');
    const banner = document.querySelectorAll('.banner-list > li');
    const pauseBtn = document.querySelector('.pause-btn');
    const duration = 4000;
    let timer;
    let count = 0;
    let playState = true;

    autoPlay();

    function autoPlay() {
        timer = setInterval(() => {
            if (count < banner.length - 1) {
                count++;
                classToggle();
            } else {
                count = 0;
                classToggle();
            }
        }, duration);
    }
    function autoPlayStop() {
        clearInterval(timer);
    }

    pauseBtn.addEventListener('click', function () {
        if (playState) {
            autoPlayStop();
            playState = false;
            this.classList.add('on');
        } else {
            autoPlay();
            playState = true;
            this.classList.remove('on');
        }
    })

    dot.forEach((item, index) => {
        item.addEventListener('click', function () {
            count = index;

            if (!playState) {
                autoPlayStop();
                classToggle();
            } else {
                autoPlayStop();
                autoPlay();
                classToggle();
            }
        })
    })

    function classToggle() {
        allRemoveClass(banner);
        banner[count].classList.add('on');
        allRemoveClass(dot);
        dot[count].classList.add('on');
    }

}
function chart() {
    const $li = document.querySelectorAll('.chart-list > li');

    //hover Evt
    $li.forEach(item => {
        item.addEventListener('mouseenter', function () {
            allRemoveClass($li);
            item.classList.add('on');
        });
    });

    //date modify
    const dateCell = document.querySelector('.today-date');
    const hourCell = document.querySelector('.today-hour');

    const toYear = new Date().getFullYear();
    const toMonth = ('0' + (new Date().getMonth() + 1)).slice(-2);
    const toDay = ('0' + new Date().getDate()).slice(-2);
    const toHour = ('0' + new Date().getHours()).slice(-2);
    const toMin = ('0' + new Date().getMinutes()).slice(-2);

    dateCell.innerHTML = `${toYear}.${toMonth}.${toDay}`;
    hourCell.innerHTML = `${toHour}:${toMin}`;
}
function hotNew() {
    const dot = document.querySelectorAll('.hot-dot-list > li');
    const hot = document.querySelectorAll('.hot-list > li');
    const pauseBtn = document.querySelector('.hot-pause-btn');
    const duration = 5000;
    const nextBtn = document.querySelector('.hot-next-btn');
    const prevBtn = document.querySelector('.hot-prev-btn');
    let count = 0;
    let timer;
    let playState = true;

    nextBtn.addEventListener('click', function () {
        if (!playState) {
            autoPlayStop();
            if (count < hot.length - 1) {
                count++;
                classToggle();
            } else {
                count = 0;
                classToggle();
            }
        } else {
            autoPlayStop();
            autoPlay();
            if (count < hot.length - 1) {
                count++;
                classToggle();
            } else {
                count = 0;
                classToggle();
            }
        }
    });

    prevBtn.addEventListener('click', function () {
        if (playState) {
            autoPlayStop();
            autoPlay();
            if (count > 0) {
                count--;
                classToggle();
            } else {
                count = hot.length - 1;
                classToggle();
            }
        } else {
            autoPlayStop();
            if (count > 0) {
                count--;
                classToggle();
            } else {
                count = hot.length - 1;
                classToggle();
            }
        }
    });

    autoPlay();

    function autoPlay() {
        timer = setInterval(() => {
            if (count < hot.length - 1) {
                count++;
                classToggle();
            } else {
                count = 0;
                classToggle();
            }
        }, duration);
    }
    function autoPlayStop() {
        clearInterval(timer);
    }

    pauseBtn.addEventListener('click', function () {
        if (playState) {
            autoPlayStop();
            playState = false;
            this.classList.add('on');
        } else {
            autoPlay();
            playState = true;
            this.classList.remove('on');
        }
    })

    dot.forEach((item, index) => {
        item.addEventListener('click', function () {
            count = index;

            if (!playState) {
                classToggle();
                autoPlayStop();
            } else {
                classToggle();
                autoPlayStop();
                autoPlay();
            }
        })
    })

    function classToggle() {
        allRemoveClass(hot);
        hot[count].classList.add('on');
        allRemoveClass(dot);
        dot[count].classList.add('on');
    }
}
function recommend() {
    const playCover = document.querySelectorAll('.selection-play-cover');
    const moreShow = document.querySelector('.recommend-more-show');
    const moreBox = document.querySelector('.recommend-more');
    const moreHide = document.querySelector('.recommend-more-hide');

    playCover.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.classList.add('on');
        });
        item.addEventListener('focus', function () {
            this.classList.add('on');
        });
        item.addEventListener('mouseleave', function () {
            this.classList.remove('on');
        });
        item.addEventListener('focusout', function () {
            this.classList.remove('on');
        });
    });

    moreShow.addEventListener('click', function () {
        moreBox.classList.add('on');
        this.classList.add('off');
    });

    moreHide.addEventListener('click', function () {
        moreBox.classList.remove('on');
        moreShow.classList.remove('off');
    });

    const selectionBtn=document.querySelectorAll('.selection-btn');
    const listBox=document.querySelectorAll('.recommend-music-list-box');
    
    selectionBtn.forEach((item,index)=>{
        item.addEventListener('click',function(){
            allRemoveClass(listBox);
            listBox[index].classList.add('on');
        });
    });
    document.body.addEventListener('click',function(e){
        if(!e.target.classList.contains('exct')){
            allRemoveClass(listBox);
        }
    })
}
function video() {
    const menu = document.querySelectorAll('.video-menu');
    const videoList = document.querySelectorAll('.video-list');
    const musicVideo = document.querySelectorAll('.music-video');

    menu.forEach((item, index) => {
        item.addEventListener('click', function () {
            allRemoveClass(menu);
            item.classList.add('on');
            allRemoveClass(videoList);
            videoList[index].classList.add('on');
        });
    });

    musicVideo.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.classList.add('on');
        });
        item.addEventListener('mouseleave', function () {
            this.classList.remove('on');
        });
    })
}
//footer
function notice() {
    const list = document.querySelector('.notice-list');
    const notice = document.querySelectorAll('.notice');
    const moveWidth = document.querySelector('.notice-list>li').offsetWidth;
    const listLength = list.children.length;
    const nextBtn = document.querySelector('.notice-next');
    const prevBtn = document.querySelector('.notice-prev');
    let num = 0;

    nextBtn.addEventListener('click', function () {
        num++;
        if (num < listLength) {
            list.style.left = -moveWidth * num + 'px';
            allRemoveClass(notice);
            notice[num].classList.add('on');
            prevBtn.classList.remove('off');
            if (num >= listLength - 1) {
                nextBtn.classList.add('off');
            }
        } else {
            num = listLength - 1;
            list.style.left = -moveWidth * num + 'px';
        }
    });
    prevBtn.addEventListener('click', function () {
        num--;
        if (num >= 0) {
            list.style.left = -moveWidth * num + 'px';
            allRemoveClass(notice);
            notice[num].classList.add('on');
            nextBtn.classList.remove('off');
            if (num <= 0) {
                prevBtn.classList.add('off');
            }
        }else{
            num=0;
            list.style.left = -moveWidth * num + 'px';
        }
    });
}