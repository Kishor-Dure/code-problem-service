const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizemarkdownContent(markdownContent) {
  const turndownService = new TurndownService();
  //1. convert markdow to html
  const convertedHtml = marked.parse(markdownContent);

  //2. SanitizeMarkdow html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat('img'),
  });

  //3. convert the sanittized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizemarkdownContent;
