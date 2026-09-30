# Media and evidence checklist

## Gather these first

1. Bigfoot: a walking video, annotated CAD image, and one test plot or trial sheet
2. Bike carrier: CAD render, concept sketches, and labeled FEA plot
3. Vision and scissors: hardware photos and labeled results plots

Origami and Nucor are text-only. Ricardo confirmed on September 30, 2026 that no images can be shared from either role because the work is NDA-adjacent. Do not request photos, screenshots, CAD exports, diagrams, comparison graphics, or video from those projects.

Clear original photos, CAD exports, and labeled plots from the other projects are enough. Send original files when possible; exact filenames can be handled when adding them to the site.

For each image or clip, include a short caption with what it shows and which parts you worked on. For plots, include units and test conditions. For videos, identify any assistance or support used during the demonstration.

## Full list of reserved media

Media slots are already reserved in the project pages. Place each file in `media/`, find its filename in the relevant page's `PAGE` object, and change `type` from `empty` to `image` or `video`. Add an `alt` description for images; use `note` as a fallback. Video uses visible controls; a `poster` path is optional. Replace placeholder captions with captions describing the actual evidence.

Use only material you can share publicly. Keep unknown results unknown; do not substitute illustrative or generated images for engineering evidence.

| Page | Reserved file | What to supply |
| --- | --- | --- |
| Bigfoot | `bigfoot-annotated-cad.png` | Mark components personally designed; distinguish inherited lab design |
| Bigfoot | `bigfoot-system.png` | Pi/CAN/actuator/control architecture and motion-capture setup |
| Bigfoot | `bigfoot-walking.mp4` | Physical walking with conditions and any assistance identified |
| Bigfoot | `bigfoot-test-results.png` | Trial conditions, observation or measurement, and one design comparison |
| Bike carrier | `bike-carrier-render.png` | Final CAD assembly |
| Bike carrier | `bike-carrier-concepts.png` | Compared concepts and selection criteria |
| Bike carrier | `bike-carrier-fea.png` | Loads, restraints, units, and safety-factor result |
| Bike carrier | `bike-carrier-final.png` | Final folded assembly; clearly label as CAD if rendered |
| Vision | `defect-detection.png` | Annotated detection example |
| Vision | `defect-training-curves.png` | Labeled comparison/validation results |
| Vision | `defect-hardware.jpg` | Actual camera/Python/Arduino alert setup |
| Scissors | `scissors-response.png` | Measured or simulated response, with units and cutting load |

Displayed images remain in place: `bigfoot.jpg`, `scissors.png`, and `rink.png`. Greek Sing and Booth are text-only for now at Ricardo's request. Their files, `greek-sing.png` and `booth.png`, are kept in `media/` for possible later use, but are not displayed and have no empty image placeholders.

## Greek Sing and Booth description prompts

Answer in rough notes; these prompts are for editing and do not appear on the site.

### Greek Sing

Ricardo has served as Sets Chair for two different shows. The description covers both productions, with the supplied figures explicitly attributed to the 2025 show: more than eight set pieces, 200+ build hours, a $1,700 budget, and three material delivery cycles. These are not combined totals or claims about both shows. Examples include SolidWorks structural models and fabrication drawings, wheeled backdrops, hinged frames, spiral stairs, and coordination with the music, script, and choreography teams. Photos remain hidden.

Optional details for a future revision:

- One specific construction or stage-change problem, what you changed, and how it worked during the show
- How the frames, stairs, or backdrops connected and moved between the shop and stage

### Spring Carnival Booth

- Which parts did you personally build, decorate, or install?
- What drawings, materials, tools, and joining methods did you use?
- Describe one attachment or assembly problem and how you fixed it
- What was the result, and what was your responsibility compared with the rest of the team?

## Text details still to fill

- Bigfoot: one specific engineering constraint, alternatives considered, chosen design change, and observed test outcome; paper title/venue/link only when available and shareable
- Origami and Nucor: keep the current text-only overviews; any future text additions must be information Ricardo can share publicly
- Bike carrier: measured versus CAD-estimated mass; FEA assumptions; personal task split
- Vision and other group coursework: personal implementation ownership versus team results; links to shareable code/report
- Scissors: timeline, task split, controller response and whether tests included users; ergonomic benefit is not established by design intent
- Resume: confirm which current variant should replace `resume.pdf`; optional additional variants should link only after their real files are supplied

Keep pending details in this checklist until verified. Replace the corresponding public “evidence to add” text when actual results are available.
