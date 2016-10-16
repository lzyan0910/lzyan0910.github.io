function stop() {
					alert('TY，我爱你');
					return false;
				}
				document.oncontextmenu = stop;

function checkhtml5() {
						if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
							document.body.innerHTML = "<div style=' clear: both; text-align:center; position: relative; height: 50px; margin-top: 30px; padding: 20px; background-color: red; color: white; font-size:20px;'>你的浏览器非常落后，不支持 HTML5!<br/>请使用 Chrome 14+/IE 9+/Firefox 7+/Safari 4+ 其中任意一款浏览器访问此页面。</a></div>";
						}
					}

	$(window).load(function() {
				$('.page_spinner').fadeOut();
				$('body').css({
					overflow: 'visible'
				});
			})

//修改时光沙漏时间
			var offsetX = $("#loveHeart").width() / 2;
			var offsetY = $("#loveHeart").height() / 2 - 55;
			var together = new Date();
			together.setFullYear(2016, 08, 27);
			together.setHours(22);
			together.setMinutes(22);
			together.setSeconds(0);
			together.setMilliseconds(0);
			setTimeout(function() {
				adjustWordsPosition();
				startHeartAnimation();
			}, 3000);
			timeElapse(together);
			setInterval(function() {
				timeElapse(together);
			}, 500);
			adjustCodePosition();
			$("#code").typewriter();