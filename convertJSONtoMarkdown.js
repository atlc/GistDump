function convertToMarkdownTable(JSONbody) {
    if (JSONbody.Request !== undefined) {
        var records = JSONbody.Request[Object.keys(JSONbody.Request)[0]].records[0];
    } else if (JSONbody.Response !== undefined) {
        var records = JSONbody.Response[Object.keys(JSONbody.Response)[0]].records[0];
    } else {
        return 'You have submitted an invalid JSON body';
    }

    let markdownStr = `**Parameters**\n\n| Field | Required | Description/Type |\n| --- | --- | --- |\n`;
    for (i=0; i < Object.keys(records).length; i++) {
        markdownStr += `| ${Object.keys(records)[i]} | ?? | ${typeof Object.values(records)[i]} |\n`;
    }
    return markdownStr;
}
