const API_URLS = {
  WEB: {
    LOGIN: "/web/login",
    STAFF_LOGIN: "/web/staffLogin",
    SIGN_UP: "/web/sign_up",
  },
  PING: "/ping",
  VERIFY: "/verify",
  INBOUND_CALL: "/inbound_call",
  CREATE_ASSISTANT: "/createAssistant",
  GET_ASSISTANT_LIST: "/getAssistantList",
  GET_ASSISTANT_DETAILS: "/getAssistantDetails",
  UPDATE_ASSITANT: "/updateAssistant",
  DEACTIVATE_ASSISTANT: "/deactivateAssistant",
  GET_PROFILE: "/profile",
  UPDATE_PROFILE: "/profile",
  FORGET_PASSWORD: "/forgetPassword",
  RESET_PASSWORD: "/resetPassword",
  START_OUTGOING_CALL: "/startOutgoingCall",
  RECORDING_CALL_CALLBACK: "/recordingsCallback",
  USER_LIST: "/userList",
  UPDATE_USER_STATUS: "/updateUserStatus",
  MAKE_PAYMENT: "/makePayment",
  CALL_LOGS: "/callLogs",
  CALL_RECORDINGS: "/callRecordings",
  MULTIPLE_FILE_UPLOAD: "/multiplefileuploads",
  TOKEN_DATA: "/tokenData"
};

module.exports = { API_URLS };
