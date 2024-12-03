var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/instagram.js
var instagram_exports = {};
__export(instagram_exports, {
  default: () => handler
});
module.exports = __toCommonJS(instagram_exports);
var import_config = require("dotenv/config");
var import_axios = __toESM(require("axios"));
async function handler(event, context) {
  const endpoint = "https://api.instagram.com/v1/users/self/media/recent";
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 5;
  try {
    const response = await import_axios.default.get(
      `${endpoint}?access_token=${token}&count=${limit}`
    );
    const posts = response.data.data;
    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        posts.map((i) => ({
          id: i.id,
          link: i.link,
          images: i.images,
          videos: i.videos,
          caption: i.caption ? i.caption.text : ""
        }))
      )
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Instagram data" })
    };
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvaW5zdGFncmFtLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJ2RvdGVudi9jb25maWcnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQsIGNvbnRleHQpIHtcclxuICBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL3YxL3VzZXJzL3NlbGYvbWVkaWEvcmVjZW50JztcclxuICBjb25zdCB0b2tlbiA9IHByb2Nlc3MuZW52LklOU1RBR1JBTV9BQ0NFU1NfVE9LRU47XHJcbiAgY29uc3QgbGltaXQgPSA1O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIGAke2VuZHBvaW50fT9hY2Nlc3NfdG9rZW49JHt0b2tlbn0mY291bnQ9JHtsaW1pdH1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgcG9zdHMubWFwKChpKSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGkuaWQsXHJcbiAgICAgICAgICBsaW5rOiBpLmxpbmssXHJcbiAgICAgICAgICBpbWFnZXM6IGkuaW1hZ2VzLFxyXG4gICAgICAgICAgdmlkZW9zOiBpLnZpZGVvcyxcclxuICAgICAgICAgIGNhcHRpb246IGkuY2FwdGlvbiA/IGkuY2FwdGlvbi50ZXh0IDogJycsXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0dXNDb2RlOiA1MDAsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggSW5zdGFncmFtIGRhdGEnIH0pLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQU87QUFFUCxtQkFBa0I7QUFFbEIsZUFBTyxRQUErQixPQUFPLFNBQVM7QUFDcEQsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sUUFBUSxRQUFRLElBQUk7QUFDMUIsUUFBTSxRQUFRO0FBRWQsTUFBSTtBQUNGLFVBQU0sV0FBVyxNQUFNLGFBQUFBLFFBQU07QUFBQSxNQUMzQixHQUFHLFFBQVEsaUJBQWlCLEtBQUssVUFBVSxLQUFLO0FBQUEsSUFDbEQ7QUFDQSxVQUFNLFFBQVEsU0FBUyxLQUFLO0FBRTVCLFdBQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsTUFDQSxNQUFNLEtBQUs7QUFBQSxRQUNULE1BQU0sSUFBSSxDQUFDLE9BQU87QUFBQSxVQUNoQixJQUFJLEVBQUU7QUFBQSxVQUNOLE1BQU0sRUFBRTtBQUFBLFVBQ1IsUUFBUSxFQUFFO0FBQUEsVUFDVixRQUFRLEVBQUU7QUFBQSxVQUNWLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxPQUFPO0FBQUEsUUFDeEMsRUFBRTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRixTQUFTLE9BQU87QUFDZCxXQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixNQUFNLEtBQUssVUFBVSxFQUFFLE9BQU8saUNBQWlDLENBQUM7QUFBQSxJQUNsRTtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFsiYXhpb3MiXQp9Cg==
