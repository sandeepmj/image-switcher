/**
 * This is a "click-bind" which is a type of "event listener"
 * We set it up in advance so that whenever are targeted element receives a
 * particular action or "event" our custom function is fired.
 *
 * Event listeners are attached (or bound) to DOM elements.
 * If the element isn't available when jQuery attempts to create the bind
 * it simply skips it without any notice (this is called failing silently).
 *
 * One way to ensure this doesn't happen would be to wait for the moment that
 * the browser says it has processed all of your HTML into nodes, which ,together
 * make up the DOM. That's ugly. We don't need to do that.
 *
 * By putting the javascript in the bottom of the 'body' tag it ensures that the
 * body element exists when the Javascript is running (the 'script' tag that the
 * js gets pulled in by becomes a DOM element just like everythign else) and that
 * most if not all of the elements in the body tag have also already been processed
 * since they come before the script element.
 *
 * This means we can just bind our listeners to the "body" tag and know the event
 * won't fail to attach. The second parameter in the on method is a target selector
 * to evaluate. "Click" happens on the body tag and then the browser checks what element
 * the user actually clicked on. If that element's selector matches your second parameter
 * it fires the function
 */

$("body").on("click", ".my-button", function (e) {
  /**
   * Some browsers have standard behaviors for buttons like page navigation or attempting to submit a form.
   * Since we don't know for sure what browser we're in, let's disable all browser default functions so
   * we know the button will only do what we tell it
   */
  e.preventDefault();

  /**
   * There are multiple buttons on the page with the class "my-button".
   * It's always a good idea to know which one was clicked on.
   * All event listeners store the DOM element that received the event in a JS keyword
   * called 'this'.
   */
  const clicked_button = this;

  /**
   * DOM elements are awesome but we want to have access to jQuery methods.
   * It's very easy to create a jQuery object out of a DOM element.
   *
   * While it's not necessary, I like to start my variables with a '$' when they
   * hold a jQuery object
   */
  const $clicked_button = $(this);

  /**
   * Let's also capture and store the image tag in a jQuery object so we can play
   * with it
   */
  const $img = $("#aids-img");

  /**
   * Now let's get the URL of the image we're going to plug into the image tag
   */
  const img_url = $clicked_button.data("image");

  /**
   * Now let's switch the image by updating the src attribute using jQuery's attr method
   */
  $img.attr("src", img_url);

  /**
   * Now let's disable this button using jQuery's 'prop' method
   */
  $clicked_button.prop("disabled", true);

  /**
   * Finally, let's make sure any other buttons with the 'my-button' class are enabled
   */
  $(".my-button").not($clicked_button).prop("disabled", false);
});