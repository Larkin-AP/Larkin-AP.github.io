(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  var lang = "en";
  try {
    lang = localStorage.getItem("lang") || ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
  } catch (e) {}
  if (!S[lang]) lang = "en";

  function render() {
    var C = S[lang], E = S.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = C.name + " · " + (lang === "zh" ? "机器人" : "Robotics");

    $("brand").textContent = C.name;
    $("name").innerHTML = esc(C.name) + "<small>" + esc(C.nameAlt) + "</small>";
    $("title").textContent = C.title;
    $("affiliation").textContent = C.affiliation;
    $("intro").textContent = C.intro;
    $("lang").textContent = lang === "zh" ? "English" : "中文";

    var L = C.labels;
    $("links").innerHTML =
      '<a href="mailto:' + esc(S.links.email) + '">' + esc(L.email) + "</a>" +
      '<a href="' + esc(S.links.scholar) + '" target="_blank" rel="noopener">' + esc(L.scholar) + "</a>" +
      '<a href="' + esc(S.links.github) + '" target="_blank" rel="noopener">' + esc(L.github) + "</a>";

    var order = ["research", "projects", "publications", "patents", "honors", "education"];
    $("nav").innerHTML = order.map(function (k) { return '<a href="#' + k + '">' + esc(C.nav[k]) + "</a>"; }).join("");
    document.querySelectorAll("[data-h]").forEach(function (h) { h.textContent = C.nav[h.getAttribute("data-h")]; });

    var cards = function (arr) {
      return arr.map(function (x) {
        return '<div class="card"><h3>' + esc(x.title) + "</h3>" +
          (x.meta ? '<div class="meta">' + esc(x.meta) + "</div>" : "") +
          "<p>" + esc(x.text) + "</p></div>";
      }).join("");
    };
    $("research-list").innerHTML = cards(C.research);
    $("projects-list").innerHTML = cards(C.projects);

    var pubs = C.publications || E.publications;
    $("pub-note").textContent = C.publicationsNote + " " + L.legend + ".";
    $("pub-list").innerHTML = pubs.map(function (p) {
      var badge = p.status ? '<span class="badge live">' + esc(p.status) + "</span>" : "";
      var authors = p.authors ? p.authors + (/\.$/.test(p.authors) ? " " : ". ") : "";
      var venue = p.venue + (p.year && p.year !== "under review" ? ", " + p.year : "");
      return "<li>" + badge + authors + '<span class="t">' + esc(p.title) + '.</span> <span class="v"><i>' + esc(venue) + "</i></span></li>";
    }).join("");

    var pats = C.patents || E.patents;
    $("patent-list").innerHTML = pats.map(function (p) {
      return "<li><span class=\"badge" + (p.status === "Granted" ? " live" : "") + '">' + esc(p.status) + "</span>" + esc(p.text) + "</li>";
    }).join("");

    $("honor-list").innerHTML = C.honors.map(function (h) {
      return '<li><span class="d">' + esc(h.year) + '</span><span class="s">' + esc(h.text) + "</span></li>";
    }).join("");

    $("edu-list").innerHTML = C.education.map(function (e) {
      return '<li><span class="d">' + esc(e.period) + '</span><span><span class="s">' + esc(e.school) + '</span><br><span class="x">' + esc(e.detail) + "</span></span></li>";
    }).join("");

    $("foot").textContent = "© " + new Date().getFullYear() + " " + E.name + " · " + (lang === "zh" ? "最近更新：2026.10" : "Last updated Oct 2026");
  }

  $("lang").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });

  render();
})();
