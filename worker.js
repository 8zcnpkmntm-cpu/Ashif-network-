const M3U_URL = "https://iptv-org.github.io/iptv/countries/in.m3u";
const VALID_TOKENS = [
  "client0001", "client0002", "client0003", "client0004", "client0005", "client0006", "client0007", "client0008", "client0009", "client0010",
  "client0011", "client0012", "client0013", "client0014", "client0015", "client0016", "client0017", "client0018", "client0019", "client0020",
  "client0021", "client0022", "client0023", "client0024", "client0025", "client0026", "client0027", "client0028", "client0029", "client0030",
  "client0031", "client0032", "client0033", "client0034", "client0035", "client0036", "client0037", "client0038", "client0039", "client0040",
  "client0041", "client0042", "client0043", "client0044", "client0045", "client0046", "client0047", "client0048", "client0049", "client0050",
  "client0051", "client0052", "client0053", "client0054", "client0055", "client0056", "client0057", "client0058", "client0059", "client0060",
  "client0061", "client0062", "client0063", "client0064", "client0065", "client0066", "client0067", "client0068", "client0069", "client0070",
  "client0071", "client0072", "client0073", "client0074", "client0075", "client0076", "client0077", "client0078", "client0079", "client0080",
  "client0081", "client0082", "client0083", "client0084", "client0085", "client0086", "client0087", "client0088", "client0089", "client0090",
  "client0091", "client0092", "client0093", "client0094", "client0095", "client0096", "client0097", "client0098", "client0099", "client0100"
];
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    if (!token || !VALID_TOKENS.includes(token)) {
      return new Response("Access Denied", { status: 401 });
    }
    const resp = await fetch(M3U_URL);
    const content = await resp.text();
    return new Response(content, {
      headers: {
        "Content-Type": "audio/x-mpegurl",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
