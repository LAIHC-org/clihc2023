<script setup>
import TheHeader from '@/components/Header.vue'
import OrganizerItem from '@/components/OrganizerItem.vue';
</script>

<template>
    <TheHeader>
        <template #page-name>
            Accessibility recommendations for authors
        </template>
    </TheHeader>

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <ol class="list-group list-group-numbered mb-4">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a class="uline"
                                            href="./accessibility-recommendations-for-authors#language-recommendations">Language
                                            recommendations</a></div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a class="uline"
                                            href="./accessibility-recommendations-for-authors#accessible-document-author-recommendations">Accessible
                                            document
                                            author recommendations</a></div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a class="uline"
                                            href="./accessibility-recommendations-for-authors#accessible-slide-author-recommendations">Accessible
                                            slide author
                                            recommendations</a></div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a class="uline"
                                            href="./accessibility-recommendations-for-authors#accessible-video-author-recommendations">Accessible
                                            video author
                                            recommendations</a></div>
                                </div>
                            </li>
                        </ol>

                        <p>
                            MexIHC 2022 will be a fully virtual online event. We are doing our best effort to
                            provide an accessible environment, and as the primary producers of information, we
                            have some accessibility recommendations that we encourage you to follow, to help us
                            to maximize the experience for everyone.
                        </p>

                        <!-- Language recommendations-->
                        <h2 id="language-recommendations">Language recommendations</h2>

                        <p>
                            As one of the leading research activities is to present and transmit your ideas
                            through writing, we invite you to read the
                            <a class="uline"
                                href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/">Accessible
                                Writing Guide</a> and the
                            <a class="uline"
                                href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/">Accessible
                                Presentation Guide</a>, published by
                            <a class="uline" href="http://www.sigaccess.org/">ACM
                                SIGACCESS</a>, where you can find
                            recommendations in the current thinking on language for writing in the academic
                            accessibility community, as well as the nine guidelines for preparing a conference
                            presentation, made by
                            <a class="uline" href="https://cs.uiowa.edu/people/kyle-rector">Kyle Rector</a>, to better
                            communicate your message to every
                            audience member.
                        </p>
                        <!-- end Language recommendations -->

                        <!-- Accessible document author recommendations -->
                        <h2 id="accessible-document-author-recommendations">Accessible document author recommendations
                        </h2>

                        <p>
                            Every accessible document should offer perception and interaction alternatives,
                            besides facilitating comprehension for everyone. Here you have
                            <a class="uline"
                                href="https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d">
                                how to make your Microsoft Word document accessible to people with
                                disabilities</a>
                            or, if you work with
                            Google Docs, they have published
                            <a class="uline" href="https://support.google.com/docs/answer/6199477?hl=en">how to make
                                your
                                document or presentation more
                                accessible</a>.
                        </p>
                        <p>
                            As a minimum, we recommend you to consider:
                        </p>
                        <ol>
                            <li>
                                <strong>The use of built-in heading styles</strong> to improve navigation: this
                                helps people that use <a class="uline"
                                    href="https://en.wikipedia.org/wiki/Screen_reader">screen readers</a> make
                                an active reading.
                            </li>
                            <li>
                                <strong>The use of meaningful text for links:</strong> this improves navigation
                                and readability; avoid “click here” links.
                            </li>
                            <li>
                                <strong>Add alternative text to images:</strong> this helps people who use a
                                screen reader to perceive visual content; it must be concise.
                            </li>
                            <li>
                                <strong>In general, avoid tables if possible</strong>. But if you have to use it:
                                <ol type="a">
                                    <li>
                                        <strong>Add alternative text and description to tables:</strong> it
                                        helps people to use a screen reader to understand what is important in
                                        the table; it must be specific and concise.
                                    </li>
                                    <li>
                                        <strong>Use tables only for tabular information</strong>, not as
                                        document structure. Also, you must configure the table header to appear
                                        on subsequent pages.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <strong>To add captions for figures and tables</strong>.
                            </li>
                            <li>
                                <strong>To use simple language</strong>, as possible.
                            </li>
                        </ol>

                        <p>
                            Adobe has published
                            <a class="uline"
                                href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">how
                                to create and verify PDF accessibility with Acrobat Pro</a>, and
                            a microsite where you can find
                            <a class="uline" href="https://adobe.lookbookhq.com/acrobataccessibility">Webinar Recordings
                                and
                                Materials on Creating
                                Accessible PDFs</a> that may be helpful too.
                        </p>

                        <p>
                            In addition, Apple has some <a class="uline"
                                href="https://support.apple.com/en-my/HT210563">recommendations about
                                accessibility for Pages, Numbers, or Keynote</a>, and for an open-source option here we
                            have
                            <a class="uline"
                                href="https://wiki.documentfoundation.org/Accessibility/Creating_Accessible_LibreOffice_Files">how
                                to create accessible LibreOffice files</a>.
                        </p>
                        <!-- end Accessible document author recommendations -->

                        <!-- Accessible slide author recommendations -->
                        <h2 id="accessible-slide-author-recommendations">Accessible slide author recommendations</h2>
                        <p>
                            Your presentations will be available as part of the digital products generated at
                            MexIHC 2022, therefore is possible that people who will read them, use a screen
                            reader, so we encourage you to consult the <a class="uline"
                                href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/">Accessible
                                Presentation Guide</a>, published
                            by <a class="uline" href="http://www.sigaccess.org/">ACM SIGACCESS</a>, and how to <a
                                class="uline"
                                href="https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25">make
                                your Microsoft PowerPoint presentations accessible to people with
                                disabilities</a>. If you work with Google Slides, they have published
                            <a class="uline" href="https://support.google.com/docs/answer/6199477?hl=en">how to make
                                your
                                document or presentation more accessible</a>.
                        </p>
                        <p>
                            As minimum accessibility practices you can:
                        </p>
                        <ol>
                            <li>
                                <strong>Give every slide a unique title.</strong> Make this using the built-in
                                title box of the predefined slide templates.
                            </li>
                            <li>
                                <strong>Add alternative text to images or mark them as decorative
                                    images:</strong> this helps people who use a screen reader to perceive
                                visual content; it must be concise.
                            </li>
                            <li>
                                <strong>Highlight key elements</strong> on images: adding other marks besides
                                color, helps people with color blindness.
                            </li>
                            <li>
                                <strong>Avoid the use of tables as possible.</strong>
                            </li>
                            <li>
                                Consider the <strong><a class="uline"
                                        href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/">Accessible
                                        Presentation Guide</a></strong>.
                            </li>
                        </ol>

                        <p>
                            In addition, Apple has some <a class="uline"
                                href="https://support.apple.com/en-my/HT210563">recommendations about
                                accessibility for Pages, Numbers, or Keynote</a>, and for an open-source option here we
                            have
                            <a class="uline"
                                href="https://wiki.documentfoundation.org/Accessibility/Creating_Accessible_LibreOffice_Files">how
                                to create accessible LibreOffice files</a>.
                        </p>
                        <!-- end Accessible slide author recommendations -->

                        <!-- Accessible video author recommendations -->
                        <h2 id="accessible-video-author-recommendations">Accessible video author recommendations</h2>

                        <p>
                            If you need to publish a video, <strong>we suggest you generate closed
                                captions</strong>: this could help people with hearing loss. <a class="uline"
                                href="https://support.google.com/youtube/answer/2734796?hl=en">You can create
                                closed captions automatically on Youtube</a>,
                            then edit them to <strong>use simpler language, as possible</strong>. Once you
                            create your captions, you can download the <a class="uline"
                                href="https://es.wikipedia.org/wiki/SubRip">.SRT file</a> (“SubRip Subtitle” is one of
                            the most common types of raw closed caption file formats or subtitle formats), and
                            <a class="uline" href="https://www.facebook.com/help/261764017354370">use it to upload to
                                the same
                                video posted as a video from Facebook</a>.
                        </p>
                        <p>
                            Remember it is important to:
                        </p>
                        <ol>
                            <li><strong>Use closed captions</strong>: conciseness is recommended.</li>
                            <li><strong>Use simple language</strong>, as possible.</li>
                            <li>Identify the .SRT file for that particular video, for further use.</li>
                        </ol>
                        <!-- end Accessible video author recommendations -->
                        <h2>Web Chairs</h2>
                        <div class="row">

                            <div class="col-md-4 mt-md-0 mt-4">
                                <OrganizerItem>
                                    <template #image>
                                        <div class="d-block blur-shadow-image">
                                            <img src="/assets/img/nophoto.png" alt=""
                                                class="img-fluid shadow rounded-3">
                                        </div>
                                        <div class="colored-shadow"
                                            style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                        </div>
                                    </template>
                                    <template #name>
                                        Miguel Angel Rodríguez Ortiz
                                    </template>
                                    <template #institution>
                                        Universidad de Colima
                                    </template>
                                    <template #email>
                                    </template>
                                </OrganizerItem>
                            </div>
                            <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                <OrganizerItem>
                                    <template #image>
                                        <div class="d-block blur-shadow-image">
                                            <img src="/assets/img/nophoto.png" alt=""
                                                class="img-fluid shadow rounded-3">
                                        </div>
                                        <div class="colored-shadow"
                                            style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                        </div>
                                    </template>
                                    <template #name>
                                        Arlem Castillo Avila
                                    </template>
                                    <template #institution>
                                        BUAP, MX
                                    </template>
                                    <template #email>
                                    </template>
                                </OrganizerItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>