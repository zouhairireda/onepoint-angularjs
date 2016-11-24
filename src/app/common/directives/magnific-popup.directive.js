export default () => ({
  restrict: 'A',
  link: link
});

function link(scope, element) {
  scope.$evalAsync(function () {
      element.magnificPopup({
        type: 'image'
      });
  });
}