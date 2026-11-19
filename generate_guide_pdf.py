import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_decorations(self, page_count):
        self.saveState()
        page_w, page_h = A4
        
        # Header on all pages except Page 1
        if self._pageNumber > 1:
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(colors.HexColor("#b8860b"))
            self.drawString(40, page_h - 26, "COMPLETE GUIDE: CLAIMING & CONNECTING AN IS-A.DEV DOMAIN")
            
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawRightString(page_w - 40, page_h - 26, "STEP-BY-STEP DEVELOPER MANUAL")
            
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.75)
            self.line(40, page_h - 32, page_w - 40, page_h - 32)
            
            # Running Footer
            self.line(40, 32, page_w - 40, 32)
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawString(40, 20, "Guide by Arpit Sachdeva · Reference: https://arpitsachdeva.is-a.dev")
            
            page_text = f"Page {self._pageNumber} of {page_count}"
            self.drawRightString(page_w - 40, 20, page_text)
        else:
            # Subtle footer on cover
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.75)
            self.line(40, 32, page_w - 40, 32)
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#94a3b8"))
            self.drawString(40, 20, "Open Source Community Reference Manual · 100% Free Lifetime Subdomains")
            self.drawRightString(page_w - 40, 20, f"Page 1 of {page_count}")
            
        self.restoreState()

def create_guide_pdf(filename="How_to_Claim_is-a-dev_Domain_Step_by_Step_Guide.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=38,
        rightMargin=38,
        topMargin=40,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()
    
    # Custom Luxury & Modern Palette
    C_PRIMARY = colors.HexColor("#0f172a") # Slate 900
    C_GOLD = colors.HexColor("#b8860b")    # Dark Goldenrod
    C_GOLD_LIGHT = colors.HexColor("#dfac43") # Champagne Gold
    C_TEXT = colors.HexColor("#1e293b")   # Slate 800
    C_MUTED = colors.HexColor("#475569")  # Slate 600
    C_CODE_BG = colors.HexColor("#09090d")# Deep Onyx
    C_CODE_FG = colors.HexColor("#fef08a")# Soft Yellow
    C_BOX_BG = colors.HexColor("#fffdf5") # Pale Golden Amber
    C_BOX_BORDER = colors.HexColor("#eab308") # Amber 500
    C_GRAY_BG = colors.HexColor("#f8fafc")

    # Typography Styles
    styles.add(ParagraphStyle(
        'CoverEyebrow',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=C_GOLD,
        spaceAfter=4
    ))

    styles.add(ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=25,
        textColor=C_PRIMARY,
        spaceAfter=6
    ))

    styles.add(ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10.5,
        leading=15,
        textColor=C_MUTED,
        spaceAfter=12
    ))

    styles.add(ParagraphStyle(
        'MetaText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#475569")
    ))

    styles.add(ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12.5,
        leading=16,
        textColor=C_PRIMARY,
        spaceBefore=10,
        spaceAfter=5,
        keepWithNext=True
    ))

    styles.add(ParagraphStyle(
        'SubSectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=C_GOLD,
        spaceBefore=7,
        spaceAfter=3,
        keepWithNext=True
    ))

    styles.add(ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=C_TEXT,
        spaceAfter=4
    ))

    styles.add(ParagraphStyle(
        'BulletDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=C_TEXT,
        leftIndent=12,
        firstLineIndent=-9,
        spaceAfter=2.5
    ))

    styles.add(ParagraphStyle(
        'CodeBlock',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=8,
        leading=11.5,
        textColor=C_CODE_FG
    ))

    styles.add(ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=colors.HexColor("#713f12")
    ))

    styles.add(ParagraphStyle(
        'CalloutTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#854d0e"),
        spaceAfter=2
    ))

    def make_code_box(code_text):
        p = Paragraph(code_text.strip().replace("\n", "<br/>").replace(" ", "&nbsp;"), styles['CodeBlock'])
        t = Table([[p]], colWidths=[518])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), C_CODE_BG),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 10),
            ('RIGHTPADDING', (0,0), (-1,-1), 10),
            ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#27272a")),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ]))
        return t

    def make_callout_box(title, text, is_warning=False):
        t_style = styles['CalloutTitle']
        c_style = styles['CalloutText']
        bg = C_BOX_BG if not is_warning else colors.HexColor("#fff1f2")
        border = C_BOX_BORDER if not is_warning else colors.HexColor("#f43f5e")
        if is_warning:
            t_style = ParagraphStyle('WarnT', parent=t_style, textColor=colors.HexColor("#9f1239"))
            c_style = ParagraphStyle('WarnC', parent=c_style, textColor=colors.HexColor("#881337"))

        content = [Paragraph(f"<b>{title}</b>", t_style), Paragraph(text, c_style)]
        t = Table([[content]], colWidths=[518])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), bg),
            ('BOX', (0,0), (-1,-1), 1, border),
            ('LINELEFT', (0,0), (0,-1), 3.5, border),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 10),
            ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ]))
        return t

    story = []

    # ========================== PAGE 1 ==========================
    story.append(Paragraph("THE ULTIMATE DEVELOPER GUIDE · LIFETIME FREE DOMAIN", styles['CoverEyebrow']))
    story.append(Paragraph("How to Claim &amp; Connect Your Free <code>.is-a.dev</code> Domain", styles['CoverTitle']))
    story.append(Paragraph(
        "A complete, verified technical walkthrough: from GitHub Pull Request &amp; Vercel DNS "
        "verification to live HTTPS production deployment.",
        styles['CoverSubtitle']
    ))

    # Meta card table
    meta_data = [
        [
            Paragraph("<b>Author &amp; Reference:</b> Arpit Sachdeva", styles['MetaText']),
            Paragraph("<b>Target Domain:</b> yourname.is-a.dev", styles['MetaText'])
        ],
        [
            Paragraph("<b>Live Production Reference:</b> https://arpitsachdeva.is-a.dev", styles['MetaText']),
            Paragraph("<b>Cost &amp; Validity:</b> ₹0 (100% Free · Lifetime Forever)", styles['MetaText'])
        ],
        [
            Paragraph("<b>Hosting Platform:</b> Vercel (or GitHub Pages / Cloudflare)", styles['MetaText']),
            Paragraph("<b>Prerequisites:</b> GitHub Account &amp; Live Web Project", styles['MetaText'])
        ]
    ]
    meta_table = Table(meta_data, colWidths=[259, 259])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_GRAY_BG),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 10))

    # SECTION 1
    story.append(Paragraph("1. What is <code>is-a.dev</code> &amp; Why Use It?", styles['SectionHeading']))
    story.append(Paragraph(
        "<b>is-a.dev</b> is a community-driven open-source service providing <b>free, lifetime subdomains "
        "under the official <code>.dev</code> top-level domain</b> (e.g., <code>arpitsachdeva.is-a.dev</code>). "
        "Unlike commercial registrars (.com, .in) charging ₹800–₹1,500/year, <code>is-a.dev</code> has <b>zero renewal fees</b>.",
        styles['BodyDark']
    ))
    story.append(Paragraph("<b>Key Advantages:</b>", styles['BodyDark']))
    story.append(Paragraph("• <b>Professional Branding:</b> Replaces messy default URLs like <i>portfolio-pi-navy.vercel.app</i> with clean <i>yourname.is-a.dev</i>.", styles['BulletDark']))
    story.append(Paragraph("• <b>GitOps Workflow:</b> Domain records are maintained as JSON code inside GitHub with complete revision history.", styles['BulletDark']))
    story.append(Paragraph("• <b>Automatic SSL / HTTPS:</b> Cloudflare and Vercel automatically provision and renew edge SSL certificates.", styles['BulletDark']))
    story.append(Paragraph("• <b>Versatility:</b> Seamlessly connects to Vercel, Cloudflare Pages, GitHub Pages, or custom server IPs.", styles['BulletDark']))

    story.append(Spacer(1, 8))

    # SECTION 2
    story.append(Paragraph("2. Prerequisites Checklist", styles['SectionHeading']))
    story.append(Paragraph("1. <b>Active GitHub Account:</b> Where you can fork repos and submit Pull Requests.", styles['BulletDark']))
    story.append(Paragraph("2. <b>Live Vercel Project:</b> Your project must already be deployed on Vercel with a functioning <code>*.vercel.app</code> URL.", styles['BulletDark']))

    story.append(Spacer(1, 8))

    # SECTION 3
    story.append(Paragraph("3. Step 1: Add Custom Domain in Vercel &amp; Obtain TXT Token", styles['SectionHeading']))
    story.append(Paragraph(
        "Before registering the subdomain on GitHub, Vercel must generate an ownership verification token.",
        styles['BodyDark']
    ))
    story.append(Paragraph("1. Open your <b>Vercel Project Dashboard</b> (e.g. <code>portfolio</code>) &gt; <b>Settings &gt; Domains</b>.", styles['BulletDark']))
    story.append(Paragraph("2. Type your target domain: <b><code>yourname.is-a.dev</code></b> and click <b>Add</b>.", styles['BulletDark']))
    story.append(Paragraph("3. Choose the option: <i>Add yourname.is-a.dev (Production)</i>.", styles['BulletDark']))
    story.append(Paragraph("4. Vercel will show an <b>Invalid Configuration / Verification Required</b> card with a TXT record code:", styles['BulletDark']))

    story.append(Spacer(1, 4))
    story.append(make_code_box("Record Type: TXT\nName:        _vercel (or @ root)\nValue:       vc-domain-verify=yourname.is-a.dev,db340285de97cb4dff90"))
    story.append(Spacer(1, 5))
    story.append(make_callout_box(
        "CRITICAL: Keep this TXT verification token safe!",
        "Do NOT delete the domain from Vercel. Copy this exact token value (<code>vc-domain-verify=...</code>). You will embed it into your registration JSON file in Step 3 so Vercel can automatically verify ownership once the PR is merged."
    ))

    # ========================== PAGE 2 ==========================
    story.append(PageBreak())

    # SECTION 4
    story.append(Paragraph("4. Step 2: Fork the Official <code>is-a-dev/register</code> Repository", styles['SectionHeading']))
    story.append(Paragraph(
        "All <code>is-a.dev</code> subdomains are claimed via GitHub Pull Requests in the official open-source repository.",
        styles['BodyDark']
    ))
    story.append(Paragraph("1. Open <b>https://github.com/is-a-dev/register</b> in your browser.", styles['BulletDark']))
    story.append(Paragraph("2. Click the <b>Fork</b> button in the top-right corner.", styles['BulletDark']))
    story.append(Paragraph("3. Select your GitHub account and click <b>Create fork</b>.", styles['BulletDark']))
    story.append(Paragraph("4. You now have your own repository at <code>https://github.com/yourusername/register</code>.", styles['BulletDark']))

    story.append(Spacer(1, 8))

    # SECTION 5
    story.append(Paragraph("5. Step 3: Create Your Domain JSON Configuration File", styles['SectionHeading']))
    story.append(Paragraph(
        "Inside your forked repo, go to the <b><code>domains/</code></b> folder. "
        "Here you create one new file whose name exactly matches your chosen subdomain.",
        styles['BodyDark']
    ))
    story.append(Paragraph("<b>Strict File Naming Rules:</b>", styles['SubSectionHeading']))
    story.append(Paragraph("• File name must be strictly <b><code>&lt;subdomain&gt;.json</code></b> (e.g. <code>arpitsachdeva.json</code>).", styles['BulletDark']))
    story.append(Paragraph("• Must be completely <b>lowercase</b> with letters, numbers, and hyphens only (no uppercase, spaces, or underscores).", styles['BulletDark']))

    story.append(Paragraph("<b>Exact JSON Content for Vercel Deployment:</b>", styles['SubSectionHeading']))
    story.append(Paragraph("Click <b>Add file &gt; Create new file</b> inside <code>domains/</code>, and paste:", styles['BodyDark']))

    json_example = """{
  "owner": {
    "username": "god1arpit",
    "email": "arpitsachdeva9999@gmail.com"
  },
  "record": {
    "CNAME": "cname.vercel-dns.com",
    "TXT": "vc-domain-verify=arpitsachdeva.is-a.dev,db340285de97cb4dff90"
  }
}"""
    story.append(make_code_box(json_example))
    story.append(Spacer(1, 5))

    story.append(make_callout_box(
        "JSON Field Explanations:",
        "<b>• owner.username:</b> Your GitHub username (must match the GitHub account creating the PR).<br/>"
        "<b>• owner.email:</b> Your email address for contact and notifications.<br/>"
        "<b>• record.CNAME:</b> Must be <code>cname.vercel-dns.com</code> (routes to Vercel's global edge network).<br/>"
        "<b>• record.TXT:</b> The exact verification token copied from Vercel in Step 1."
    ))

    story.append(Paragraph(
        "Scroll to the bottom, enter commit message <code>Add Vercel domain configuration JSON file</code>, "
        "and click <b>Commit changes</b> directly to <code>main</code>.",
        styles['BodyDark']
    ))

    story.append(Spacer(1, 8))

    # SECTION 6
    story.append(Paragraph("6. Step 4: Open a Pull Request (PR)", styles['SectionHeading']))
    story.append(Paragraph(
        "Now create the Pull Request to submit your domain to the official <code>is-a-dev</code> repository.",
        styles['BodyDark']
    ))
    story.append(Paragraph("1. In your forked repo, click on the <b>Pull requests</b> tab &gt; <b>New pull request</b>.", styles['BulletDark']))
    story.append(Paragraph("2. Verify that <b>base repository: is-a-dev/register (branch: main)</b> and <b>head repository: yourusername/register (branch: main)</b>.", styles['BulletDark']))
    story.append(Paragraph("3. Click <b>Create pull request</b>.", styles['BulletDark']))
    story.append(Paragraph("4. Title your PR clearly: <code>Register yourname.is-a.dev</code>.", styles['BulletDark']))
    story.append(Paragraph("5. Submit the pull request.", styles['BulletDark']))

    story.append(Spacer(1, 5))
    story.append(make_callout_box(
        "Automated Bot CI Checks:",
        "Within 1 to 2 minutes, <code>is-a-dev-reviewbot</code> will run automated test checks verifying JSON syntax, valid username, and record format. Once tests pass, you will see green checkmarks across all jobs."
    ))

    # ========================== PAGE 3 ==========================
    story.append(PageBreak())

    # SECTION 7
    story.append(Paragraph("7. Step 5: Pull Request Approval &amp; Merge", styles['SectionHeading']))
    story.append(Paragraph(
        "Once automated checks pass, maintainers of <code>is-a.dev</code> will review and merge your PR. "
        "Reviews typically take between <b>2 hours to 24 hours</b>.",
        styles['BodyDark']
    ))
    story.append(Paragraph(
        "When approved, you will receive an official email: <b>'Pull Request Merged! 🎉'</b>. "
        "Cloudflare's DNS infrastructure will immediately propagate the new CNAME and TXT records across worldwide servers.",
        styles['BodyDark']
    ))

    story.append(Spacer(1, 8))

    # SECTION 8
    story.append(Paragraph("8. Step 6: Fix the Vercel 'No Deployment' Warning (Crucial)", styles['SectionHeading']))
    story.append(Paragraph(
        "After the PR is merged, when you check Vercel <b>Settings &gt; Domains</b>, you will see:",
        styles['BodyDark']
    ))

    story.append(make_callout_box(
        "Common Vercel Warning Message:",
        "<i>'Your domain is properly configured, but you don't have a production deployment. To deploy to production, push to main, or run vercel --prod with our command-line interface.'</i>",
        is_warning=True
    ))
    story.append(Spacer(1, 5))

    story.append(Paragraph("<b>Why This Happens &amp; How to Fix It:</b>", styles['SubSectionHeading']))
    story.append(Paragraph(
        "Even though DNS configuration is 100% valid, Vercel requires an <b>active production deployment build created AFTER the domain was linked</b> "
        "in order to attach the SSL certificate and route incoming web traffic to your bundle.",
        styles['BodyDark']
    ))
    story.append(Paragraph("<b>The 1-Minute Solution:</b>", styles['BodyDark']))
    story.append(Paragraph("1. Make any minor commit or update in your project code.", styles['BulletDark']))
    story.append(Paragraph("2. Push to GitHub main branch: <code>git push origin main</code>.", styles['BulletDark']))
    story.append(Paragraph("3. Vercel automatically detects the commit via webhook, triggers a production build, and binds <code>yourname.is-a.dev</code> to the live deployment.", styles['BulletDark']))
    story.append(Paragraph("4. The warning in Vercel turns into a green checkmark: <b>Valid Configuration (Production)</b>!", styles['BulletDark']))

    story.append(Spacer(1, 8))

    # SECTION 9
    story.append(Paragraph("9. Step 7: Verification &amp; Live HTTPS Test", styles['SectionHeading']))
    story.append(Paragraph(
        "Verify your new live domain directly in your browser or terminal with curl:",
        styles['BodyDark']
    ))
    story.append(make_code_box("curl -I https://yourname.is-a.dev\n\nHTTP/1.1 200 OK\nServer: Vercel\nStrict-Transport-Security: max-age=63072000"))
    story.append(Spacer(1, 5))
    story.append(Paragraph(
        "Your website is now permanently live over HTTPS with worldwide CDN caching, zero hosting fees, and zero domain renewals!",
        styles['BodyDark']
    ))

    story.append(Spacer(1, 8))

    # SECTION 10
    story.append(Paragraph("10. Frequently Asked Questions (FAQ)", styles['SectionHeading']))

    faq_data = [
        [
            Paragraph("<b>Question</b>", styles['CalloutTitle']),
            Paragraph("<b>Answer</b>", styles['CalloutTitle'])
        ],
        [
            Paragraph("<b>How long is the domain valid?</b>", styles['BodyDark']),
            Paragraph("<b>Lifetime (Forever).</b> There is no annual renewal or expiration date. It remains active as long as your site is running and complies with terms.", styles['BodyDark'])
        ],
        [
            Paragraph("<b>Is it completely free?</b>", styles['BodyDark']),
            Paragraph("<b>Yes, 100% Free (₹0).</b> No hidden costs, credit card, or payment required.", styles['BodyDark'])
        ],
        [
            Paragraph("<b>Can I switch hosting in future?</b>", styles['BodyDark']),
            Paragraph("<b>Yes.</b> If you move from Vercel to Cloudflare Pages or a custom server, simply edit your JSON file in your fork and submit a new PR.", styles['BodyDark'])
        ],
        [
            Paragraph("<b>Can I use sub-paths &amp; assets?</b>", styles['BodyDark']),
            Paragraph("<b>Yes.</b> All routes and assets (e.g. <code>/resume.pdf</code>, <code>/sitemap.xml</code>) work natively on your new custom domain.", styles['BodyDark'])
        ]
    ]
    faq_table = Table(faq_data, colWidths=[180, 338])
    faq_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#fef3c7")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#cbd5e1")),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 4.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4.5),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(faq_table)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF Successfully Generated: {filename}")

if __name__ == "__main__":
    create_guide_pdf()
