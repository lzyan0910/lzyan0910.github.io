function stop() {
					alert('TY���Ұ���');
					return false;
				}
				document.oncontextmenu = stop;

function checkhtml5() {
						if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
							document.body.innerHTML = "<div style=' clear: both; text-align:center; position: relative; height: 50px; margin-top: 30px; padding: 20px; background-color: red; color: white; font-size:20px;'>���������ǳ���󣬲�֧�� HTML5!<br/>��ʹ�� Chrome 14+/IE 9+/Firefox 7+/Safari 4+ ��������һ����������ʴ�ҳ�档</a></div>";
						}
					}

	$(window).load(function() {
				$('.page_spinner').fadeOut();
				$('body').css({
					overflow: 'visible'
				});
			})

//�޸�ʱ��ɳ©ʱ��
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