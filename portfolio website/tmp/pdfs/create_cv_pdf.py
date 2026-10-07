from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    KeepTogether,
)


output = "output/pdf/victor-gerogiannis-cv.pdf"

doc = SimpleDocTemplate(
    output,
    pagesize=A4,
    rightMargin=18 * mm,
    leftMargin=18 * mm,
    topMargin=16 * mm,
    bottomMargin=16 * mm,
)

styles = getSampleStyleSheet()

ink = colors.HexColor("#211c24")
soft = colors.HexColor("#5e5662")
mauve = colors.HexColor("#6f536c")
sage = colors.HexColor("#8fa994")
line = colors.HexColor("#ddd6df")
paper = colors.white

styles.add(
    ParagraphStyle(
        name="Name",
        fontName="Helvetica-Bold",
        fontSize=25,
        leading=30,
        textColor=ink,
        spaceAfter=3,
    )
)

styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=16,
        textColor=mauve,
        spaceAfter=8,
    )
)

styles.add(
    ParagraphStyle(
        name="Contact",
        fontName="Helvetica",
        fontSize=9,
        leading=12,
        textColor=soft,
    )
)

styles.add(
    ParagraphStyle(
        name="SectionTitle",
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=15,
        textColor=ink,
        borderPadding=(0, 0, 4, 0),
        borderColor=line,
        borderWidth=0,
        spaceBefore=8,
        spaceAfter=7,
    )
)

styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=9.4,
        leading=13.5,
        textColor=soft,
        spaceAfter=6,
    )
)

styles.add(
    ParagraphStyle(
        name="ItemTitle",
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=13,
        textColor=ink,
        spaceAfter=2,
    )
)

styles.add(
    ParagraphStyle(
        name="Meta",
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=11,
        textColor=mauve,
        spaceAfter=3,
    )
)

styles.add(
    ParagraphStyle(
        name="Skill",
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=12,
        textColor=ink,
        backColor=colors.Color(0.92, 0.95, 0.93),
        borderPadding=(4, 6, 4, 6),
    )
)


def section(title):
    return Paragraph(title, styles["SectionTitle"])


def item(title, meta, text):
    return KeepTogether(
        [
            Paragraph(title, styles["ItemTitle"]),
            Paragraph(meta, styles["Meta"]),
            Paragraph(text, styles["Body"]),
        ]
    )


def skill_table(skills):
    rows = []
    for i in range(0, len(skills), 3):
        row = [Paragraph(skill, styles["Skill"]) for skill in skills[i : i + 3]]
        while len(row) < 3:
            row.append("")
        rows.append(row)

    table = Table(rows, colWidths=[47 * mm, 47 * mm, 47 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return table


story = []

header = Table(
    [
        [
            Paragraph("Victor Gerogiannis", styles["Name"]),
            Paragraph(
                "Email: victorgerogianni@gmail.com<br/>Phone: +30 694 420 4482<br/>GitHub: github.com/mroldjohn",
                styles["Contact"],
            ),
        ],
        [Paragraph("Junior Web Developer", styles["Role"]), ""],
    ],
    colWidths=[105 * mm, 54 * mm],
)
header.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("LINEBELOW", (0, 1), (-1, 1), 1, line),
        ]
    )
)

story.append(header)
story.append(Spacer(1, 7 * mm))

story.append(section("Profile"))
story.append(
    Paragraph(
        "Student web developer studying Web Development and Game Development at IEK Delta 360. I have completed the web design part of my studies and I am continuing with the game development part this year. I enjoy building simple, organized and useful websites with HTML, CSS and JavaScript.",
        styles["Body"],
    )
)

story.append(section("Education"))
story.append(
    item(
        "IEK Delta 360",
        "Web Development / Game Development",
        "Completed the web design part of the studies. Continuing with the game development part this year.",
    )
)
story.append(
    item(
        "Angular Seminar",
        "September 2026 - One month seminar",
        "Learned Angular basics and practiced component-based frontend development.",
    )
)

story.append(section("Technical Skills"))
story.append(
    skill_table(
        [
            "HTML",
            "CSS",
            "JavaScript",
            "React basics",
            "Angular basics",
            "PHP",
            "MySQL",
            "Python basics",
            "C basics",
            "C++ basics",
            "Responsive Design",
            "Web Design",
        ]
    )
)

story.append(section("Project Experience"))
story.append(
    item(
        "Portfolio and Study Projects",
        "HTML, CSS, JavaScript, PHP, MySQL",
        "Built web projects such as storefront pages, product catalogs, dashboards, filters, contact pages and database-backed websites. These projects helped me practice layout, styling, frontend logic and connecting pages with data.",
    )
)

story.append(section("Strengths"))
strengths = [
    "Good understanding of HTML structure and CSS styling.",
    "Comfortable creating simple JavaScript modules and interactive pages.",
    "Interested in frontend development, UI design and game development.",
    "Motivated to keep learning and improve through real projects.",
]
for text in strengths:
    story.append(Paragraph("- " + text, styles["Body"]))

story.append(section("Languages"))
story.append(Paragraph("Greek: Native or fluent<br/>English: Working knowledge", styles["Body"]))

doc.build(story)
print(output)
