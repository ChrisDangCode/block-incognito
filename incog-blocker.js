/* Based on: https://stackoverflow.com/questions/2909367/can-you-determine-if-chrome-is-in-incognito-mode-via-a-script */

/* Works only for Chrome based browsers. */
function main() {
  var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
  if (!fs) {
    hide.textContent = "Check failed. Likely not in Chrome based browser.";
    return;
  }
  fs(window.TEMPORARY, 100, function (fs) {
    hide.textContent = "You are not in incognito. Here's the rest of your content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam congue arcu, sit amet ultricies elit pharetra ac. Curabitur commodo erat ac lacus vulputate eleifend. Suspendisse potenti. Pellentesque eget pulvinar arcu. Praesent non nulla sit amet risus finibus molestie. Etiam nec lacus ultricies, aliquet augue quis, pulvinar orci. Morbi laoreet neque vel purus bibendum, porta pellentesque massa fermentum. Quisque venenatis nisi lectus, a lobortis felis scelerisque et. Nullam vitae arcu eget lacus dictum malesuada non mattis nulla. Ut auctor non odio sed fermentum. Cras massa eros, aliquet at quam et, sollicitudin volutpat purus. Praesent consequat efficitur enim, eget ullamcorper enim tempus ut. Ut viverra scelerisque odio, at tincidunt diam congue vitae. Vivamus et ornare urna, eget venenatis elit. Vivamus eleifend risus interdum metus tincidunt viverra.";
  }, function (err) {
    hide.textContent = "You are in incognito mode. Please view this outside of incognito.";
  });
}
main();

