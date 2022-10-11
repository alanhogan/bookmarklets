// Find images in Markdown format in text boxes on GitLab, then convert to HTML format with a set width.
// Note that GitLab does not allow `style="max-width:350px"` instead, hence `width` attr here.
const el = document.querySelector(
  "textarea[name='merge_request[description]'], textarea#issue-description, textarea#note-body, textarea#wiki_content"
);

el.value = el.value.replace(
  /^!\[.*?(?<!\\)]\((.*?)(?<!\\)\)/gm,
  '<img src="$1" width="350" />'
);
