export const REFRESH_BALANCE_EVENT = "refreshBalance";
export const REFRESH_PROFILE_EVENT = "refetchProfile";

export const DATE_FORMATS = {
  d_MMM_yyyy_hh_mm_A: "d MMM yyyy, hh:mm A",
};

export const WALLET_STATUS: any = {
  1: { title: "Initiated", style: "in_progress" },
  2: { title: "Completed", style: "in_complete" },
  3: { title: "Failed", style: "in_fail" },
};

export const NEW_SEARCH_INX_FILTERS = [
  {
    label: "Lighting and Visual Effects",
    options: [
      {
        label: "back lit side lit",
        value: "back_lit_side_lit",
      },
      {
        label: "diffused lighting",
        value: "diffused_lighting",
      },
      {
        label: "lighting",
        value: "lighting",
      },
      {
        label: "lighting tones histograms",
        value: "lighting_tones_histograms",
      },
      {
        label: "shadows highlights",
        value: "shadows_highlights",
      },
      {
        label: "lens flare",
        value: "lens_flare",
      },
      {
        label: "color temperatures",
        value: "color_temperatures",
      },
    ],
  },
  {
    label: "Camera Techniques",
    options: [
      {
        label: "camera angles",
        value: "camera_angles",
      },
      {
        label: "camera angle",
        value: "camera_angle",
      },
      {
        label: "camera focus",
        value: "camera_focus",
      },
      {
        label: "camera height",
        value: "camera_height",
      },
      {
        label: "camera movements",
        value: "camera_movements",
      },
      {
        label: "camera steadiness",
        value: "camera_steadiness",
      },
      {
        label: "movement_speed",
        value: "movement_speed",
      },
      {
        label: "movement types",
        value: "movement_types",
      },
      {
        label: "lens distortion",
        value: "lens_distortion",
      },
      {
        label: "macro cinematography",
        value: "macro_cinematography",
      },
      {
        label: "tilt motion",
        value: "tilt_motion",
      },
      {
        label: "zoom motion",
        value: "zoom_motion",
      },
      {
        label: "pan motion",
        value: "pan_motion",
      },
      {
        label: "tracking shots",
        value: "tracking_shots",
      },
      {
        label: "tracking shots type",
        value: "tracking_shots_type",
      },
    ],
  },
  {
    label: "Shot Details",
    options: [
      {
        label: "wide angle close up",
        value: "wide_angle_close_up",
      },
      {
        label: "shot breakdown",
        value: "shot_breakdown",
      },
      {
        label: "shot sizes",
        value: "shot_sizes",
      },
      {
        label: "over the shoulder",
        value: "over_the_shoulder",
      },
      {
        label: "overhead",
        value: "overhead",
      },
      {
        label: "low high angle",
        value: "low_high_angle",
      },
      {
        label: "silhouette",
        value: "silhouette",
      },
      {
        label: "timelapse",
        value: "timelapse",
      },
      {
        label: "fpv handheld",
        value: "fpv_handheld",
      },
      {
        label: "Drone or Aerial Video",
        value: "drone_or_aerial_video",
      },
    ],
  },
  {
    label: "Human Features",
    options: [
      {
        label: "characters",
        value: "characters",
      },
      {
        label: "facial expressions biometrics",
        value: "facial_expressions_biometrics",
      },
      {
        label: "Eye Behavior",
        value: "eye_behavior",
      },
      {
        label: "Head Movements",
        value: "head_movements",
      },
      {
        label: "Muscular Movements",
        value: "muscular_movements",
      },
      {
        label: "Speech-Related Movements",
        value: "speech_related_movements",
      },
      {
        label: "Microexpressions",
        value: "microexpressions",
      },
      {
        label: "Physiological",
        value: "physiological",
      },
      {
        label: "Physiological Indicators",
        value: "physiological_indicators",
      },
      {
        label: "Emotional Cues",
        value: "emotional_cues",
      },
    ],
  },
  {
    label: "Object Recognition",
    options: [
      {
        label: "brands and logos",
        value: "brands_and_logos",
      },
      {
        label: "key objects",
        value: "key_objects",
      },
      {
        label: "specific objects",
        value: "specific_objects",
      },
      {
        label: "Object Recognition and Machine Learning",
        value: "object_recognition_and_machine_learning",
      },
      {
        label: "Weapons and Dangerous Objects",
        value: "weapons_and_dangerous_objects",
      },
    ],
  },
  {
    label: "Environment and Setting",
    options: [
      {
        label: "location",
        value: "location",
      },
      {
        label: "Temporal Context",
        value: "temporal_context",
      },
      {
        label: "time of day",
        value: "time_of_day",
      },
      {
        label: "distance to subject",
        value: "distance_to_subject",
      },
      {
        label: "contextual_data",
        value: "Contextual Data",
      },
    ],
  },
  {
    label: "Scene and Style",
    options: [
      {
        label: "styles aesthetics",
        value: "styles_aesthetics",
      },
      {
        label: "scene theme",
        value: "scene_theme",
      },
      {
        label: "motion types",
        value: "motion_types",
      },
      {
        label: "motion speeds",
        value: "motion_speeds",
      },
      {
        label: "motion effects",
        value: "motion_effects",
      },
    ],
  },
  {
    label: "Behavioral Cues",
    options: [
      {
        label: "actions",
        value: "actions",
      },
      {
        label: "behaviors",
        value: "behaviors",
      },
      {
        label: "Eye Behavior",
        value: "eye_behavior",
      },
      {
        label: "Head Movements",
        value: "head_movements",
      },
    ],
  },
  {
    label: "Emotional and Sentiment Indicators",
    options: [
      {
        label: "Sentiment",
        value: "sentiment",
      },
      {
        label: "Psychological Disturbance",
        value: "psychological_disturbance",
      },
    ],
  },
  {
    label: "Harmful or Offensive Content",
    options: [
      {
        label: "Fear-Inducing Content",
        value: "fear_inducing_content",
      },
      {
        label: "Profanity and Offensive Language",
        value: "profanity_and_offensive_language",
      },
      {
        label: "Graphic Content",
        value: "graphic_content",
      },
      {
        label: "Harmful or Disturbing Actions",
        value: "harmful_or_disturbing_actions",
      },
      {
        label: "Sexual Content",
        value: "sexual_content",
      },
      {
        label: "Violence Indicators",
        value: "violence_indicators",
      },
      {
        label: "Substance Use",
        value: "substance_use",
      },
      {
        label: "Sin and Moral Transgressions",
        value: "sin_and_moral_transgressions",
      },
    ],
  },
  {
    label: "Motion Analysis",
    options: [
      {
        label: "slow fast motion",
        value: "slow_fast_motion",
      },
      {
        label: "movement speed",
        value: "movement_speed",
      },
      {
        label: "motion types",
        value: "motion_types",
      },
      {
        label: "motion speeds",
        value: "motion_speeds",
      },
      {
        label: "camera movements",
        value: "camera_movements",
      },
    ],
  },
  {
    label: "Video Analysis",
    options: [
      {
        label: "video speed",
        value: "video_speed",
      },
      {
        label: "on screen overlays",
        value: "on_screen_overlays",
      },
      {
        label: "summary",
        value: "summary",
      },
      {
        label: "styles aesthetics",
        value: "styles_aesthetics",
      },
    ],
  },
  {
    label: "Hardware and System Metadata",
    options: [{ label: "GPS Metadata", value: "gps_metadata" }],
  },
];

export interface SearchInxFiltersInterface {
  label: string;
  value: string;
}

export const SEARCH_INX_FILTERS: Array<SearchInxFiltersInterface> = [
  {
    label: "sentiment",
    value: "sentiment",
  },
  {
    label: "scene theme",
    value: "scene_theme",
  },
  {
    label: "characters",
    value: "characters",
  },
  {
    label: "summary",
    value: "summary",
  },
  {
    label: "actions",
    value: "actions",
  },
  {
    label: "key objects",
    value: "key_objects",
  },
  {
    label: "shot breakdown",
    value: "shot_breakdown",
  },
  {
    label: "specific objects",
    value: "specific_objects",
  },
  {
    label: "brands and logos",
    value: "brands_and_logos",
  },
  {
    label: "facial expressions biometrics",
    value: "facial_expressions_biometrics",
  },
  {
    label: "motions movements",
    value: "motions_movements",
  },
  {
    label: "voices",
    value: "voices",
  },
  {
    label: "lighting tones histograms",
    value: "lighting_tones_histograms",
  },
  {
    label: "color temperatures",
    value: "color_temperatures",
  },
  {
    label: "shadows highlights",
    value: "shadows_highlights",
  },
  {
    label: "location",
    value: "location",
  },
  {
    label: "time of day",
    value: "time_of_day",
  },
  {
    label: "camera angles",
    value: "camera_angles",
  },
  {
    label: "low high angle",
    value: "low_high_angle",
  },
  {
    label: "overhead",
    value: "overhead",
  },
  {
    label: "fpv handheld",
    value: "fpv_handheld",
  },
  {
    label: "wide angle close up",
    value: "wide_angle_close_up",
  },
  {
    label: "macro cinematography",
    value: "macro_cinematography",
  },
  {
    label: "over the shoulder",
    value: "over_the_shoulder",
  },
  {
    label: "lighting",
    value: "lighting",
  },
  {
    label: "diffused lighting",
    value: "diffused_lighting",
  },
  {
    label: "silhouette",
    value: "silhouette",
  },
  {
    label: "lens flare",
    value: "lens_flare",
  },
  {
    label: "back lit side lit",
    value: "back_lit_side_lit",
  },
  {
    label: "motion speeds",
    value: "motion_speeds",
  },
  {
    label: "slow fast motion",
    value: "slow_fast_motion",
  },
  {
    label: "timelapse",
    value: "timelapse",
  },
  {
    label: "styles aesthetics",
    value: "styles_aesthetics",
  },
  {
    label: "physiological",
    value: "physiological",
  },
  {
    label: "behavioral",
    value: "behavioral",
  },
  {
    label: "GPS Metadata",
    value: "GPS Metadata",
  },
  {
    label: "Visual Cues",
    value: "Visual Cues",
  },
  {
    label: "Acoustic Cues",
    value: "Acoustic Cues",
  },
  {
    label: "Temporal Context",
    value: "Temporal Context",
  },
  {
    label: "Contextual Data",
    value: "Contextual Data",
  },
  {
    label: "Object Recognition and Machine Learning",
    value: "Object Recognition and Machine Learning",
  },
  {
    label: "Drone or Aerial Video",
    value: "Drone or Aerial Video",
  },
  {
    label: "Emotional Cues",
    value: "Emotional Cues",
  },
  {
    label: "Physiological Indicators",
    value: "Physiological Indicators",
  },
  {
    label: "Microexpressions",
    value: "Microexpressions",
  },
  {
    label: "Muscular Movements",
    value: "Muscular Movements",
  },
  {
    label: "Eye Behavior",
    value: "Eye Behavior",
  },
  {
    label: "Head Movements",
    value: "Head Movements",
  },
  {
    label: "Speech-Related Movements",
    value: "Speech-Related Movements",
  },
  {
    label: "Violence Indicators",
    value: "Violence Indicators",
  },
  {
    label: "Graphic Content",
    value: "Graphic Content",
  },
  {
    label: "Weapons and Dangerous Objects",
    value: "Weapons and Dangerous Objects",
  },
  {
    label: "Sexual Content",
    value: "Sexual Content",
  },
  {
    label: "Profanity and Offensive Language",
    value: "Profanity and Offensive Language",
  },
  {
    label: "Substance Use",
    value: "Substance Use",
  },
  {
    label: "Harmful or Disturbing Actions",
    value: "Harmful or Disturbing Actions",
  },
  {
    label: "Sin and Moral Transgressions",
    value: "Sin and Moral Transgressions",
  },
  {
    label: "Fear-Inducing Content",
    value: "Fear-Inducing Content",
  },
  {
    label: "Psychological Disturbance",
    value: "Psychological Disturbance",
  },
];
