$(document).ready(function () {
	animateButton();

	setTimeout(function () {
		loader("out");
		countdown();
	}, 5000);
});

function loader(s) {
	if (s == "out") {
		$("#loader").addClass("animate__fadeOut animate__fast");

		setTimeout(function () {
			$("#loader").addClass("hide");
			$("#loader").removeClass("animate__fadeOut");
		}, 800);
	} else if (s == "in") {
		$("#loader").removeClass("hide");
		$("#loader").addClass("animate__fadeIn animate__fast");
	}
}

function animateButton() {
	var animateButton = function (e) {
		e.preventDefault;
		//reset animation
		e.target.classList.remove("animate");

		e.target.classList.add("animate");
		setTimeout(function () {
			e.target.classList.remove("animate");
		}, 700);
	};

	var animateInputButton = function () {
		var $this = $(this);

		$this.preventDefault;
		$this.closest(".bubbly-input").removeClass("animate");
		$this.closest(".bubbly-input").addClass("animate");
		setTimeout(function () {
			$this.closest(".bubbly-input").removeClass("animate");
		}, 700);
	};

	var bubblyButtons = $(".bubbly-button");
	var bubblyInput = $(".bubbly-input input");

	for (var i = 0; i < bubblyButtons.length; i++) {
		bubblyButtons[i].addEventListener("click", animateButton, false);
	}

	for (var i = 0; i < bubblyInput.length; i++) {
		bubblyInput[i].addEventListener("click", animateInputButton, false);
	}
}

function countdown() {
	var endTime = "2 Maret 2025 00:00:00 GMT+07:00";

	function makeTimer(e) {
		var endTime = new Date(e);
		endTime = Date.parse(endTime) / 1000;

		var now = new Date();
		now = Date.parse(now) / 1000;

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}

    let timer = setInterval(timerFunction, 1000);

    function timerFunction() {
		makeTimer(endTime);
        if (new Date() > new Date(endTime)) {
            location.reload();
        }
    }

	if (new Date() > new Date(endTime)) {
		$(".countdown .end-progress").removeClass("hide");
        clearInterval(timer);
	} else {
		$(".countdown .progress").removeClass("hide");
	}

	setTimeout(function () {
		$(".countdown").find(".gif").addClass("animate__fadeInDown animate__fast");
		$(".countdown").find(".gif").removeClass("hide");

		setTimeout(function () {
			$(".countdown").find(".head").addClass("animate__fadeInDown animate__fast");
			$(".countdown").find(".head").removeClass("hide");

			setTimeout(function () {
				$(".countdown").find(".timer-wrap").addClass("animate__fadeInDown animate__fast");
				$(".countdown").find(".timer-wrap").removeClass("hide");
			}, 400);

			setTimeout(function () {
				$(".countdown").find("#countdown-btn").addClass("animate__fadeInDown animate__fast");
				$(".countdown").find("#countdown-btn").removeClass("hide");
			}, 400);
		}, 400);
	}, 100);

	$("#countdown-btn").click(function () {
		setTimeout(function () {
			$("#countdown-btn").remove();
			$(".countdown").find(".end-progress").append(`<p class="atten">Memindahkan halaman...</p>`);

			setTimeout(function () {
				$(".countdown").find(".end-progress").addClass("hide");
				loader("in");

				setTimeout(function () {
					loader("out");
					step1();
				}, 5000);
			}, 3000);
		}, 700);
	});
}

function step1() {
	setTimeout(function () {
		$("#step-1").find(".gif").addClass("animate__fadeInDown animate__fast");
		$("#step-1").find(".gif").removeClass("hide");

		$("#step-1").find(".head").addClass("animate__fadeInDown animate__fast");
		$("#step-1").find(".head").removeClass("hide");

		$("#step-1").find(".input-code").addClass("animate__fadeInUp animate__fast");
		$("#step-1").find(".input-code").removeClass("hide");
	}, 800);

	$("#step-1")
		.find(".input-code input")
		.keypress(function (e) {
			var key = e.which;
			if (key == 13) {
				if (!$(this).val()) {
					$("#step-1").find(".atten").removeClass("hide");
					$("#step-1").find(".atten").text("Jangan dikosongin sayang...");

					setTimeout(function () {
						$("#step-1").find(".atten").addClass("hide");
						$("#step-1").find(".atten").text("");
					}, 1500);
				} else if ($(this).val() == "191420") {
					$("#step-1").find(".atten").text("Yeayy berhasil...");
					$("#step-1").find(".atten").removeClass("hide");

					setTimeout(function () {
						$("#step-1").find(".bubbly-input").remove();
						$("#step-1").find(".atten").text("Aku ada sesuatu buat sayang...");

						setTimeout(function () {
							$("#step-1").find(".atten").text("Pindah halaman yuk sayang...");

							setTimeout(function () {
								$("#step-1").addClass("animate__fadeIn animate__fast");
								$("#step-1").addClass("hide");

								loader("in");

								setTimeout(function () {
									step2();
								}, 5000);
							}, 3000);
						}, 3000);
					}, 1000);
				} else {
					$("#step-1").find(".atten").removeClass("hide");
					$("#step-1").find(".atten").text("Coba lagi sayang...");

					setTimeout(function () {
						$("#step-1").find(".atten").addClass("hide");
						$("#step-1").find(".atten").text("");
					}, 1500);
				}

				return false;
			}
		});
}

function step2() {
	loader("out");

	setTimeout(function () {
		$("#step-2").find(".step-1 .gif").addClass("animate__fadeInDown animate__fast");
		$("#step-2").find(".step-1 .gif").removeClass("hide");

		$("#step-2").find(".step-1 .head").addClass("animate__fadeInUp animate__fast");
		$("#step-2").find(".step-1 .head").removeClass("hide");

		setTimeout(function () {
			$("#step-2").find(".step-1 .gif img").attr("src", "assets/gif/bubu-dudu-4.gif");
			$("#step-2").find(".step-1 .head p").text("Tidak semudah itu sayangku... 🤭");

			setTimeout(function () {
				$("#step-2").find(".step-1 .gif img").attr("src", "assets/gif/bubu-dudu-5.gif");
				$("#step-2").find(".step-1 .head p").text("Ada pertanyaan yang aku mau tanyain ke sayang...");

				setTimeout(function () {
					$("#step-2").find(".step-1 .gif img").attr("src", "assets/gif/bubu-dudu-7.gif");
					$("#step-2").find(".step-1 .head p").text("Awas aja kalau sampe salah? sama aku ciwit yah 🤏🏻🤏🏻🤏🏻");

					setTimeout(function () {
						$("#step-2").find(".step-1 .gif img").attr("src", "assets/gif/bubu-dudu-8.gif");
						$("#step-2").find(".step-1 .head p").text("Are you ready sayang???");

						setTimeout(function () {
							$("#step-2").find(".step-1 button").addClass("animate__fadeInUp animate__fast");
							$("#step-2").find(".step-1 button").removeClass("hide");
						}, 1500);
					}, 4000);
				}, 4000);
			}, 4000);
		}, 2000);
	}, 800);

	$("#step-2")
		.find(".step-1 button")
		.click(function () {
			setTimeout(function () {
				$("#step-2").find(".step-1").empty();
				$("#step-2").find(".step-1").append(`<p class="atten">Memindahkan halaman...</p>`);

				setTimeout(function () {
					$("#step-2").find(".step-1 p").remove();
					loader("in");

					setTimeout(function () {
						loader("out");
						$("#step-2").find(".box").removeClass("hide");
						$("#step-2").find(".box").addClass("animate__fadeInUp animate__fast");
					}, 1500);
				}, 700);
			}, 700);

			$("#step-2")
				.find(".step-2 .inner-box .btn-3")
				.click(function () {
					$("#step-2").find(".step-2 .gif img").attr("src", "assets/gif/bubu-dudu-10.gif");
					$("#step-2").find(".step-2 .box p").text("Yeayyyy, sayang masih inget, makasih ya sayang masih inget tanggalnya... 😘😘😘");
					$("#step-2").find(".step-2 .box .inner-box").remove();

					setTimeout(function () {
						$("#step-2").find(".step-2 .box p").text("Sekarang waktunya ke halaman intinya ya sayangku...");

						setTimeout(function () {
							$("#step-2").find(".step-2").empty();
							$("#step-2").find(".step-2").append(`<p class="atten">Memindahkan halaman...</p>`);

							setTimeout(function () {
								loader("in");
								$("#step-2").find(".step-2 p.atten").remove();
                                step3();
							}, 1500);
						}, 2000);
					}, 3000);
				});

			$("#step-2")
				.find(".step-2 .inner-box .btn-2, .step-2 .inner-box .btn-1")
				.click(function () {
					$("#step-2").find(".step-2 .gif img").attr("src", "assets/gif/bubu-dudu-7.gif");
					$("#step-2").find(".step-2 .inner-box .btn-1, .step-2 .inner-box .btn-2, .step-2 .inner-box .btn-3").prop("disabled", true);
					$("#step-2").find(".step-2 .box").append(`<p class="atten">hmm...</p>`);
					setTimeout(function () {
						$("#step-2").find(".step-2 .gif img").attr("src", "assets/gif/bubu-dudu-9.gif");
						$("#step-2").find(".step-2 .inner-box .btn-1, .step-2 .inner-box .btn-2, .step-2 .inner-box .btn-3").prop("disabled", false);
						$("#step-2").find(".step-2 .box .atten").remove();
					}, 3000);
				});
		});
}

function objAnimate() {
	setTimeout(function () {
		$("#obj-1").addClass("animate__slideInUp animate__fast");
		$("#obj-1").removeClass("hide");
	}, 400);

	setTimeout(function () {
		$("#obj-2").addClass("animate__slideInUp animate__fast");
		$("#obj-2").removeClass("hide");

		setTimeout(function () {
			$("#obj-3").addClass("animate__slideInUp animate__fast");
			$("#obj-3").removeClass("hide");

			setTimeout(function () {
				$("#obj-4").addClass("animate__fadeIn animate__fast");
				$("#obj-4").removeClass("hide");

				setTimeout(function () {
					$("#obj-5").addClass("animate__fadeIn animate__fast");
					$("#obj-5").removeClass("hide");

					setTimeout(function () {
						$("#obj-6").addClass("animate__fadeIn animate__fast");
						$("#obj-6").removeClass("hide");

						setTimeout(function () {
							$("#obj-7").addClass("animate__fadeInDownBig animate__fast");
							$("#obj-7").removeClass("hide");
						}, 500);
					}, 300);
				}, 300);
			}, 600);
		}, 300);
	}, 600);

	setTimeout(function () {
		$("#obj-8").addClass("animate__zoomIn animate__fast");
		$("#obj-8").removeClass("hide");

		setTimeout(function () {
			$("#obj-9").addClass("animate__zoomIn animate__fast");
			$("#obj-9").removeClass("hide");
		}, 500);

		setTimeout(function () {
			$("#obj-10").addClass("animate__zoomIn animate__fast");
			$("#obj-10").removeClass("hide");
		}, 700);
	}, 3000);
}

function player() {
	let btn = document.getElementsByClassName("player-btn")[0],
		icon = document.getElementsByClassName("svg-play")[0];

	let audio = document.getElementById("track"),
		isPlaying = false;

	btn.addEventListener("click", function (e) {
		e.target.classList.toggle("active");

		if (!icon.classList.contains("to-pause")) {
			icon.classList.add("to-pause");
			icon.classList.remove("to-play");
		} else {
			icon.classList.remove("to-pause");
			icon.classList.add("to-play");
		}

		if (isPlaying) {
			audio.pause();
			isPlaying = false;
		} else {
			audio.play();
			isPlaying = true;
		}
	});
}

function step3() {
    setTimeout(function () {
        loader("out");
        $(".block .player-btn").addClass("animate__fadeIn animate__fast");
        $(".block .player-btn").removeClass("hide");
        $(".block").removeClass("hide");
    
        $(".player-btn").click(function(){
            if(!$(".player-btn").closest(".open").length ) {
                $(".block").addClass("open");
                step3();
            }
        });
        player();
    }, 5000);

    function step3() {
        objAnimate();
    
        setTimeout(function () {
            $("#obj-birthday").find(".obj-birthday-inner").addClass("animate__fadeInUp animate__fast");
            $("#obj-birthday").find(".obj-birthday-inner").removeClass("hide");
            $("#obj-birthday").removeClass("hide");
    
            setTimeout(function () {
                $("#step-3").find(".step-1").addClass("animate__fadeInUp animate__fast");
                $("#step-3").find(".step-1").removeClass("hide");
    
                setTimeout(function () {
                    $("#step-3").find(".step-1").removeClass("animate__fadeInUp");
                    $("#step-3").find(".step-1").addClass("animate__pulse animate__infinite	infinite");
    
                    setTimeout(function () {
                        $("#step-3").find(".step-1").addClass("hide");
                        $("#step-3").find(".step-2").removeClass("hide");
                        $("#step-3").find(".step-2").addClass("animate__zoomIn animate__fast");
    
                        setTimeout(function () {
                            $("#step-3").find(".step-2").removeClass("animate__zoomIn");
                            $("#step-3").find(".step-2").addClass("animate__pulse animate__infinite	infinite");
                        }, 800);
    
                        setTimeout(function () {
                            $("#step-3").find(".step-2").addClass("hide");
                            $("#step-3").find(".step-3").removeClass("hide");
                            $("#step-3").find(".step-3").addClass("animate__zoomIn animate__fast");
    
                            new TypeIt("#step-3 .step-3 .type", {
                                strings: ["Selamat ulang tahun sayang... semoga dengan bertambahnya umur yang sekarang, sayang bisa jadi perempuan yang sholehah dan berbakti ke orang tua yah. Dan juga dengan umur yang sekarang ini sayang bisa lebih dewasa dalam menghadapi segala halnya, terlebih lagi menghadapi sikap aku ini. Baik marahnya, keselnya dan lainnya, semoga ayang bisa menghadapinya dengan sabar sayang yah... 🥰🥰🥰"],
                                speed: 50,
                                waitUntilVisible: true,
                            }).go();
    
                            setTimeout(function () {
                                $("#step-3").find(".step-3 .type").text("");
    
                                new TypeIt("#step-3 .step-3 .type", {
                                    strings: ["Sebelumnya terima kasih sayang, sudah menemani aku sejak beberapa bulan lalu dan masih mau menerima segala kekurangan aku, baik dari finansial, sikap dan lainnya. Semoga ayang masih mau bertahan sampai waktunya tiba yah. Dan yang paling terpenting tidak berpaling dari aku, selagi aku berusaha untuk mendapatkan segalanya sayang yah... 🥰🥰🥰"],
                                    speed: 50,
                                    waitUntilVisible: true,
                                }).go();
    
                                setTimeout(function () {
                                    $("#step-3").find(".step-3 .type").text("");
    
                                    new TypeIt("#step-3 .step-3 .type", {
                                        strings: ["Sebelumnya aku minta maaf sayang, aku cuman bisa ngebuat hal ini saja buat ulang tahun yang sekarang, semoga ayang suka dengan ini ya? Maaf saat ini aku masih belum bisa memberikan lebih, do'a kan aku supaya keinginan kita bisa terwujud tahun ini ataupun tahun depan ya sayang... 🥰🥰🥰"],
                                        speed: 50,
                                        waitUntilVisible: true,
                                    }).go();
    
                                    setTimeout(function () {
                                        $("#step-3").find(".step-3").removeClass("animate__zoomIn");
                                        $("#step-3").find(".step-3").addClass("animate__fadeOut animate__fast");
    
                                        setTimeout(function () {
                                            $("#step-3").find(".step-3").addClass("hide");
                                            $("#step-end").find(".step-1").addClass("animate__fadeIn");
                                            $("#step-end").find(".step-1").removeClass("hide");
                                        }, 800);
                                    }, 30000);
                                }, 30000);
                            }, 30000);
                        }, 8000);
                    }, 8000);
                }, 800);
            }, 300);
        }, 3000);
    }
}
