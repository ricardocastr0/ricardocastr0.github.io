# Portfolio review — September 28, 2026

## Assessment

The original site matched the robotics direction, but did not yet present enough evidence for the mechanical/mechatronics, hardware integration, and test roles in the supplied brief. Its typography and contrast were readable. The main problems were content hierarchy and depth: the strongest engineering projects appeared after biography, experience, and leadership; Bigfoot was explicitly a placeholder; and Origami and Nucor had only short experience entries.

The updated site emphasizes demonstrated physical engineering work while presenting humanoids, hands, and manipulation as career interests. It does not claim advanced manipulation algorithms, production software depth, or repeatable walking without evidence.

## Changes saved

- Moved selected engineering projects immediately below the introduction and reduced the oversized name heading
- Added full-time role intent after expected May 2027 graduation
- Featured Bigfoot, Origami, and Nucor with direct case-study links
- Expanded Bigfoot with personal contribution, 1 m / 5× scale, MuJoCo, PD control, Pi/CAN/AK80-8 integration, walking result, and submitted-paper status
- Added Origami and Nucor project pages using the supplied brief, with explicit boundaries around unsupported outcomes
- Clarified the bike carrier as a course design/FEA project with a hypothetical 45,000-unit costing scenario
- Reframed the YOLO project around integration and its reported 0.147 mAP50; removed unsupported claims about an unavoidable accuracy ceiling
- Added specific media slots, descriptive image alternatives, and user-controlled video playback
- Kept the existing visual system, real images, resume PDF, and supporting coursework/campus projects

## What still matters most

| Priority | Addition | Why it matters |
| --- | --- | --- |
| 1 | Bigfoot walking clip, annotated owned components, one documented trial, one design decision and comparison | Lets a reviewer inspect the strongest robotics hardware claim |
| 2 | Origami text-only overview | No project images can be shared; retain the description of personal contribution |
| 3 | Nucor text-only overview | No project images can be shared; retain the descriptions of the two systems |
| 4 | Personal task split for team coursework, bike FEA loads and restraints, scissors response data | Makes individual contribution and validation credible |
| 5 | Current resume choice and consistency check | The repository contains one resume.pdf; the three current variants named in the brief were not supplied or substituted |
| 6 | A small documented code example or repository, if shareable | Helps substantiate Python/C++ depth and software practices for selective controls/software roles |
| 7 | Exo-hand wrist-module case study, after checking the work-history source | Could strengthen hand-hardware positioning; the brief says to obtain that source before expanding ownership claims |

Do not wait for every item to be complete before using the portfolio. Bigfoot evidence has the highest immediate value. Dart RL can be a supporting simulation project once its source and personal contribution are available; it should not displace the physical robotics work.

## Source boundaries

New biographical/project claims come from the user-supplied `Ricardo_Castro_Job_Search_System_Update.md`, dated September 28, 2026. Existing project details come from the repository at commit `39daea0a809befb434f445f2df3d985854800b29`. These are documented claims, not independent verification. The referenced resume variants, project reports, and master work-history document were not provided. Existing claims outside the brief were retained unless their wording needed qualification; they still need comparison against original records.

The attachment's job-system implementation, job ranking, scheduling, and application instructions were not executed. This review concerns the portfolio only.

Publication was requested by Ricardo on September 30, 2026. Git history records the committed changes; GitHub Pages deployment status is tracked by GitHub.

## Validation

All nine portfolio pages rendered at a 390 px mobile viewport without horizontal overflow or broken loaded images during the initial review. The mobile menu and engineering-work submenu opened correctly. Inline scripts compiled, referenced local files were checked, and Git's whitespace check passed. Five existing media assets were retained. Homepage and project layouts were also inspected visually. External destination content and resume freshness were not revalidated.

September 30 update: Ricardo confirmed that no Origami or Nucor images can be shared because the work is NDA-adjacent. Both pages are now text-only. Their six media slots and promises of future demonstrations were removed, leaving twelve slots for other projects. The media checklist reflects this restriction.
