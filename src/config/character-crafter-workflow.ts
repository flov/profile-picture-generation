import { generateRandomSeed } from "@/lib/utils";

export const characterCrafterWorkflow = (
  prompt: string,
  base64Image: string,
) => {
  return {
    input: {
      workflow: {
        "28": {
          inputs: {
            ckpt_name: "dreamshaperXL_sfwLightningDPMSDE.safetensors",
          },
          class_type: "CheckpointLoaderSimple",
          _meta: {
            title: "Load Checkpoint",
          },
        },
        "33": {
          inputs: {
            seed: generateRandomSeed(),
            steps: 6,
            cfg: 1.8,
            sampler_name: "euler_ancestral",
            scheduler: "normal",
            denoise: 1,
            model: ["155", 0],
            positive: ["34", 0],
            negative: ["36", 0],
            latent_image: ["41", 0],
          },
          class_type: "KSampler",
          _meta: {
            title: "KSampler",
          },
        },
        "34": {
          inputs: {
            text: prompt,
            clip: ["28", 1],
          },
          class_type: "CLIPTextEncode",
          _meta: {
            title: "Positive Prompt",
          },
        },
        "36": {
          inputs: {
            text: "nsfw, naked, nipples",
            clip: ["28", 1],
          },
          class_type: "CLIPTextEncode",
          _meta: {
            title: "Negative Prompt",
          },
        },
        "41": {
          inputs: {
            width: ["111", 0],
            height: ["111", 1],
            batch_size: 1,
          },
          class_type: "EmptyLatentImage",
          _meta: {
            title: "Empty Latent Image",
          },
        },
        "42": {
          inputs: {
            samples: ["33", 0],
            vae: ["28", 2],
          },
          class_type: "VAEDecode",
          _meta: {
            title: "VAE Decode",
          },
        },
        "111": {
          inputs: {
            width: 1024,
            height: 1024,
            aspect_ratio: "custom",
            swap_dimensions: "Off",
            upscale_factor: 1,
            batch_size: 1,
          },
          class_type: "CR SDXL Aspect Ratio",
          _meta: {
            title: "🔳 CR SDXL Aspect Ratio",
          },
        },
        "139": {
          inputs: {
            filename_prefix: "ComfyUI",
            images: ["146", 0],
          },
          class_type: "SaveImage",
          _meta: {
            title: "Save Image",
          },
        },
        "145": {
          inputs: {
            preset: "PLUS FACE (portraits)",
            model: ["28", 0],
          },
          class_type: "IPAdapterUnifiedLoader",
          _meta: {
            title: "IPAdapter Unified Loader",
          },
        },
        "146": {
          inputs: {
            guide_size: 754,
            guide_size_for: true,
            max_size: 1024,
            seed: generateRandomSeed(),
            steps: 6,
            cfg: 2,
            sampler_name: "euler_ancestral",
            scheduler: "normal",
            denoise: 0.1,
            feather: 5,
            noise_mask: true,
            force_inpaint: true,
            bbox_threshold: 0.5,
            bbox_dilation: 10,
            bbox_crop_factor: 3,
            sam_detection_hint: "center-1",
            sam_dilation: 0,
            sam_threshold: 0.93,
            sam_bbox_expansion: 0,
            sam_mask_hint_threshold: 0.7000000000000001,
            sam_mask_hint_use_negative: "False",
            drop_size: 10,
            wildcard: "",
            cycle: 1,
            inpaint_model: false,
            noise_mask_feather: 10,
            image: ["42", 0],
            model: ["155", 0],
            clip: ["28", 1],
            vae: ["28", 2],
            positive: ["34", 0],
            negative: ["36", 0],
            bbox_detector: ["148", 0],
          },
          class_type: "FaceDetailer",
          _meta: {
            title: "FaceDetailer",
          },
        },
        "148": {
          inputs: {
            model_name: "bbox/face_yolov8m.pt",
          },
          class_type: "UltralyticsDetectorProvider",
          _meta: {
            title: "UltralyticsDetectorProvider",
          },
        },
        "155": {
          inputs: {
            weight: 0.7000000000000001,
            weight_type: "ease in-out",
            combine_embeds: "concat",
            start_at: 0.25,
            end_at: 1,
            embeds_scaling: "V only",
            model: ["145", 0],
            ipadapter: ["145", 1],
            image: ["163", 0],
          },
          class_type: "IPAdapterAdvanced",
          _meta: {
            title: "IPAdapter Advanced",
          },
        },
        "163": {
          inputs: {
            image: base64Image,
          },
          class_type: "ETN_LoadImageBase64",
          _meta: {
            title: "Load Image (Base64)",
          },
        },
      },
    },
  };
};
