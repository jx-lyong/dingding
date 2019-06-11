(function(window){var svgSprite='<svg><symbol id="icon-weibo" viewBox="0 0 1024 1024"><path d="M471.451492 510.249123c-88.793302 4.100388-160.598698 51.671846-160.598698 111.01542 0 59.272965 71.805396 103.802134 160.598698 99.651604 88.889493-4.03592 160.823825-59.663868 160.823825-118.925576C632.274294 542.78105 560.340985 506.164085 471.451492 510.249123zM531.974937 659.501402c-27.198455 35.109636-81.011059 52.256154-133.285632 23.954575-24.863271-13.501502-23.940249-40.001039-23.940249-40.001039s-10.342556-83.672678 79.000262-94.111424C543.191396 538.953885 559.172369 624.39279 531.974937 659.501402z" fill="#494949" ></path><path d="M429.729252 614.974279c-16.695241 1.736551-28.624944 16.291035-28.624944 30.181393 0 13.95585 13.420661 23.566742 30.115901 21.608134 16.597003-1.883907 30.116925-14.718213 30.116925-28.628014C461.337133 624.198362 448.888614 613.143585 429.729252 614.974279z" fill="#494949" ></path><path d="M472.050126 603.482551c-5.722328 4.15053-6.889921 12.059664-3.777023 17.001209 2.982938 5.077645 9.952676 5.66093 15.592117 1.430582 5.51255-4.364401 7.653307-11.949146 4.670369-17.007349C485.552651 599.965447 478.68115 598.554308 472.050126 603.482551z" fill="#494949" ></path><path d="M512.24457 66.981531c-246.678192 0-446.650643 199.972451-446.650643 446.650643s199.972451 446.650643 446.650643 446.650643 446.650643-199.972451 446.650643-446.650643S758.922762 66.981531 512.24457 66.981531zM711.664436 641.314181c-36.629245 77.771271-157.354817 115.635647-246.827595 108.615767-85.031629-6.694469-194.361663-34.930557-205.658963-137.825019 0 0-5.963829-46.616714 39.226397-106.915032 0 0 64.964594-90.753957 140.6606-116.655883 75.760474-25.755594 84.578304 17.847483 84.578304 43.618427-4.0175 21.883403-11.540847 34.737152 16.889669 25.900903 0 0 74.463945-34.523281 105.099686-3.888564 24.736381 24.733311 4.085038 58.756195 4.085038 58.756195s-10.243295 11.361769 10.862395 15.44783C681.745009 532.583804 748.266052 563.41295 711.664436 641.314181zM638.241192 426.446485c-8.106632 0-14.623046-6.548136-14.623046-14.604626 0-8.184403 6.516414-14.731516 14.623046-14.731516 0 0 91.269703-16.892739 80.362282 81.205487 0 0.583285-0.064468 1.037632-0.194428 1.556449-1.037632 6.935969-7.148817 12.269441-14.344706 12.269441-8.118911 0-14.734586-6.500041-14.734586-14.603603C689.329754 477.53914 703.789071 411.974889 638.241192 426.446485zM792.548604 504.900302l-0.130983 0c-2.399653 16.59598-10.647501 17.927301-20.455891 17.927301-11.735275 0-21.23258-7.393387-21.23258-19.128663 0-10.178827 4.211928-20.518313 4.211928-20.518313 1.25048-4.28049 11.18576-30.928407-6.547113-70.704318-32.451086-54.525847-97.835236-55.336306-105.553011-52.222385-7.779174 3.045359-19.285229 4.600785-19.285229 4.600785-11.803837 0-21.283746-9.628288-21.283746-21.299095 0-9.82067 6.565533-18.121729 15.512299-20.648272 0 0 0.191358-0.324388 0.518816-0.38988 0.647753-0.12996 1.297552-0.796132 2.010797-0.860601 9.092076-1.733481 41.558511-8.118911 73.101925-0.728594C749.887992 334.122777 827.399343 388.714116 792.548604 504.900302z" fill="#494949" ></path></symbol><symbol id="icon-wuliu" viewBox="0 0 1024 1024"><path d="M512 1001.984c270.336 0 489.984-219.136 489.984-489.984S782.336 22.016 512 22.016 22.016 241.664 22.016 512s219.648 489.984 489.984 489.984z m181.76-487.424c-15.36 0-27.648 12.288-27.648 27.648 0 15.36 12.288 27.648 27.648 27.648 7.168 0 14.336-3.072 19.968-8.192 5.12-5.12 8.192-12.288 8.192-19.456-0.512-15.36-12.8-27.648-28.16-27.648zM364.544 390.656c-15.36 0-27.648 12.288-27.648 27.648 0 15.36 12.288 27.648 27.648 27.648 7.168 0 14.336-3.072 19.968-8.192 5.12-5.12 8.192-12.288 8.192-19.456-0.512-15.36-12.8-27.648-28.16-27.648z m194.048 123.904c-15.36 0-27.648 12.288-27.648 27.648s12.288 27.648 27.648 27.648c15.36 0 28.16-12.288 28.16-27.648 0-15.36-12.8-27.648-28.16-27.648z m-29.184-123.904c-15.36 0-27.648 12.288-27.648 27.648s12.288 27.648 27.648 27.648c15.36 0 28.16-12.288 28.16-27.648 0-15.36-12.8-27.648-28.16-27.648z m205.824 336.384c1.024 12.288-8.704 6.144-8.704 6.144l-35.328-23.552c-22.016 9.216-46.08 13.824-70.144 13.824-74.24 0-136.192-43.52-153.6-101.888-3.072-10.24-4.608-21.504-4.608-32.256 0-74.24 70.656-134.144 158.208-134.144 3.584 0 7.68 0 11.264 0.512 81.92 5.12 146.432 62.976 146.432 133.632-0.512 39.936-20.992 77.824-53.76 100.864l10.24 36.864z m-283.648-137.728c0 11.264 1.536 22.016 4.608 32.768h-6.144c-23.04 0-46.08-3.584-67.584-11.264l-50.176 33.792c-17.408 7.168-12.8-9.216-12.8-9.216l13.312-49.664c-39.936-26.624-64.512-71.168-65.536-119.296 0-85.504 81.92-155.136 182.784-155.136 92.16 0 167.936 57.344 181.248 132.608-3.584 0-6.656-0.512-10.24-0.512-93.184 0.512-169.472 65.536-169.472 145.92z"  ></path><path d="M621.056 443.904z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)