<template>
  <!-- The above form looks like this -->
  <div class="navbar-spacer"></div>
  <div>
    <form>
      <h6 class="doc-header">CONTACT FORM</h6>
      <div class="row">
        <div class="six columns">
          <label for="exampleEmailInput">Your email</label>
          <input class="u-full-width" placeholder="test@mailbox.com" id="exampleEmailInput" type="email">
        </div>
        <div class="six columns">
          <label for="exampleRecipientInput">Reason for contacting</label>
          <select class="u-full-width" id="exampleRecipientInput">
            <option value="Option 1">Questions</option>
            <option value="Option 2">Admiration</option>
            <option value="Option 3">Can I get your number?</option>
          </select>
        </div>
      </div>
      <label for="exampleMessage">Message</label>
      <textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
      <label class="example-send-yourself-copy">
        <input type="checkbox">
        <span class="label-body">Send a copy to yourself</span>
      </label>
      <input class="button-primary" value="Submit" type="submit">
    </form>
  </div>
<!-- Always wrap checkbox and radio inputs in a label and use a <span class="label-body"> inside of it -->
<!-- Note: The class .u-full-width is just a utility class shorthand for width: 100% -->
</template>

<style scoped>

  .doc-header {
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: .2rem;
      font-weight: 600;
  }
</style>
