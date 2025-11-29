# Firefox Configuration

- In `about:profiles`, create a new profile "dpi0" and delete all other profiles
- Launch this profile: `firefox -P dpi0`
- For the list of all profiles: `cat ~/.mozilla/firefox/profiles.ini`. Do not edit this.
- Configuration: Paste `./Configuration/user.js` at `~/.mozilla/firefox/ABCXYZ.dpi0/user.js`
- Visual Fix: Use [Firefox UI Fix](https://github.com/black7375/Firefox-UI-Fix). It's Lepton style (improvement over Firefox's Proton style)
- Fetch the pinned Lepton release: `curl -Lo "$HOME/Downloads/Lepton.zip" "https://github.com/black7375/Firefox-UI-Fix/releases/download/v8.7.3/Lepton.zip"`
- Unzip it: `unzip $HOME/Downloads/Lepton.zip -d $HOME/Downloads/Lepton`
- Paste the `Lepton/chrome` directory to: `~/.mozilla/firefox/ABCXYZ.dpi0/chrome/`
- Add your custom theme tweaks from `./Visual Fixes/tab-text-userChrome.css` to `~/.mozilla/firefox/ABCXYZ.dpi0/chrome/userChrome.css`

## Search Engine Fixes

- `Google (good)` --> `https://www.google.com/search?udm=14&q=%s&num=50`, suggestions: `https://suggestqueries.google.com/complete/search?client=firefox&q=%s`
- `Google (images)` --> `https://www.google.com/search?udm=2&q=%s&num=100`, alias: `i`
- `YouTube` --> `https://www.youtube.com/results?search_query=%s`, alias: `y`, suggestions: `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=%s`
- `Oxford` --> `https://www.oxfordlearnersdictionaries.com/definition/english/%s`, alias: `o`
