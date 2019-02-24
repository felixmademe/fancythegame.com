$(document).on('touchmove', function(e) {
	e.preventDefault();
});

$( function() {
    new fullpage('#gameFullpage',
    {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		anchors: ['start', 'question1', 'question2', 'question3', 'question4', 'question5', 'result'],

    	//Scrolling
    	css3: true,
    	scrollingSpeed: 1200,
    	autoScrolling: true,
    	fitToSection: true,
    	fitToSectionDelay: 1000,
    	scrollBar: true,
    	easing: 'easeInOutCubic',
    	easingcss3: 'ease',
    	fadingEffect: true,

    	//Accessibility
    	keyboardScrolling: true,
    	animateAnchor: true,
    	recordHistory: true,

    	//Design
    	controlArrows: true,
    	verticalCentered: true,
    	sectionsColor : ['#fff', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c', '#be2edd', '#fff'],
    	paddingTop: '1em',
    	paddingBottom: '1em',
    	fixedElements: '#header, .footer',
    	responsiveWidth: 0,
    	responsiveHeight: 0,
    	responsiveSlides: false,
    	parallax: false,
    	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    	//Custom selectors
    	sectionSelector: '.section',
    	slideSelector: '.slide',

    	lazyLoading: true,

    	//events
    	onLeave: function(origin, destination, direction){},
    	afterLoad: function(origin, destination, direction){},
    	afterRender: function(){},
    	afterResize: function(width, height){},
    	afterResponsive: function(isResponsive){},
    	afterSlideLoad: function(section, origin, destination, direction){},
    	onSlideLeave: function(section, origin, destination, direction){}
    });
});

// $( 'form input' ).on( 'click', function( e )
// {
//
// 	let input = $(this);
// 	let label = input.parent();
// 	console.log(label);
// 	label.addClass( 'active' );
// } );

 $("form section input").click(function ()
{
	let input = $(this);
	let group = input.attr( 'name' );

	var i = 0;
	$( 'input[name=' + group + ']' ).each( function()
	{
		i++;
		switch( $(this).is( ':checked' ) )
		{
			case true:
				$(this).parent().addClass( 'active' );
				console.log( i + ' ' + $(this).is( ':checked' ) );
				break;

			case false:
				console.log( i + ' ' + $(this).is( ':checked' ) );
				$(this).parent().removeClass( 'active' );

				break;
			default:
				console.log( 'Something went wrong' );
				break;
		}
	});
} );

$( 'form' ).on( 'submit', function( e )
{
	e.stopPropagation();
	e.preventDefault();
	let form = $(this);
	$( '#fail' ).text("");

	var radio_groups = {}
	$(":radio").each( function ()
	{
	    radio_groups[ this.name ] = true;
	});

	console.log(radio_groups);

	i = 0;
	j = 0;
	for( group in radio_groups)
	{
		i++;
		var checked = $('input[name="' + group + '"]:checked').length;
		if( !checked )
		{
			var input = form.find( $('input[name="' + group + '"]').first() );
			var wrapper = input.parent().parent();
			$( '#fail' ).fadeIn( 'slow' );
			$( '#fail' ).append( "Question" + i + ": no option selected <br>");
			$( 'button[type="submit"]' ).text( 'Try Again' );
			j++;
		}
	}

	let gender = $("input[name='gender']:checked").val();
	let hobby = $("input[name='hobby']:checked").val();
	let person = $("input[name='person']:checked").val();
	let my = $("input[name='my']:checked").val();
	let answer = $("input[name='answer']:checked").val();

	if( j == 0 )
	{
		$( '#fail' ).fadeOut( 'slow' );
		$( 'button[type="submit"]' ).fadeOut();
		$( '#success' ).fadeIn( 'slow' );
		$( '#success' ).html
		( 'I am a <span>' + gender + '</span><br> and I like to <span>' + hobby +
		  '</span>.<br>My favorite person is <span>' + person + '</span><br> and can you be my <span>' +
	   	  my + '</span>.<br> I promise you, the answer is always <span>' + answer + '</span>' );
	}
} );
