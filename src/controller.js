const yts = require("yt-search");
const crypto = require("crypto");
const { Status, MaxTimeLimit } = require("./Constants.json");
const YtDownloader = require("./YtDownloader");

const Service = require("./service");

module.exports = {
  Search: async (req, res) => {
    const { key } = req.params;

    yts(key, async (err, result) => {
      if (err)
        return res.json({
          status: Status.ERROR,
          message: err,
        });
      var videos = result.videos.filter((x) => x.seconds < MaxTimeLimit);
      videos = videos.length > 5 ? videos.slice(0, 5) : videos;
      if (videos.length >= 1)
        return res.json({
          status: Status.SUCCESS,
          data: videos,
        });
      return res.json({
        status: Status.ERROR,
        message: `No video of less than ${MaxTimeLimit} seconds found`,
      });
    });
  },
  Download: async (req, res) => {
    const { videoId } = req.params;

    const name = crypto.randomBytes(7).toString("hex") + ".mp3";
    const YtDl = new YtDownloader();
    YtDl.getMP3({ videoId, name }, (err, results) => {
      if (err) {
        return res.json({
          status: Status.ERROR,
          message: err,
        });
      }
      Service.Insert(name);
      return res.json({
        msg: Status.SUCCESS,
        data: {
          name: results.videoTitle,
          file: `${req.protocol}://${req.get("host")}/getfile/${name}`,
        },
      });
    });
  },
  GetFile: async (req, res) => {
    return res.download(`${__dirname}/downloads/${req.params.file}`);
  },
};
