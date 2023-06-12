<template>
	<!-- Navbar -->
	<div class="container position-sticky z-index-sticky top-0">
		<div class="row">
			<div class="col-12">
				<nav
					class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4 navbar-color-on-scroll">
					<div class="container-fluid">
						<a class="navbar-brand font-weight-bolder ms-sm-3" href="./" rel="tooltip"
							title="Ninth Mexican International Conference on Human-Computer Interaction" data-placement="bottom"
							tabindex="0">
							<img src="/assets/img/logos/clihc2023.svg" height="25" alt="CLIHC Logo">
							CLIHC 2023
						</a>
						<button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
							data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon mt-2">
								<span class="navbar-toggler-bar bar1"></span>
								<span class="navbar-toggler-bar bar2"></span>
								<span class="navbar-toggler-bar bar3"></span>
							</span>
						</button>
						<div class="collapse navbar-collapse pt-3 pb-2 py-lg-0" id="navigation">
							<ul class="navbar-nav navbar-nav-hover w-100">

								<li class="nav-item mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center active"
										aria-current="page" href="./">
										Home
									</a>
								</li>

								<li class="nav-item dropdown dropdown-hover mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#"
										id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
										aria-expanded="false">
										Authors
										<img src="/assets/img/down-arrow-dark.svg" alt="" class="arrow ms-1">
									</a>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown1">
										<li>
											<a class="dropdown-item border-radius-md"
												href="./call-for-participation#cfp-call">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Call for papers
														</span>
														<span class="text-sm text-dark">
															Abstract deadline: <del>June 12th</del> <strong class="text-danger">June 26th, 2023 EXTENDED</strong>
														</span>
													</div>
												</div>
											</a>
										</li>
										<!--
										<li>
											<a class="dropdown-item border-radius-md"
												href="./call-for-participation#gc-call">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Graduate Consortium
														</span>
														<span class="text-sm text-dark">
															Deadline: <del class="text-muted">August 15th</del> August 31st, 2022 EXTENDED
														</span>
													</div>
												</div>
											</a>
										</li>
										-->
										<li>
											<a class="dropdown-item border-radius-md"
												href="./call-for-participation#cpt-call">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Call for poster track
														</span>
														<span class="text-sm text-dark">
															Deadline: July 31th, 2023
														</span>
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md"
												href="./call-for-participation#cwt-call">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Call for workshops and tutorials
														</span>
														<span class="text-sm text-dark">
															Deadline: July 31th, 2023
														</span>
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md"
												href="./call-for-participation#sdc-call">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Student design competition
														</span>
														<span class="text-sm text-dark">
															Deadline: July 31th, 2023
														</span>
													</div>
												</div>
											</a>
										</li>										
										<li>
											<a class="dropdown-item border-radius-md"
												href="./accessibility-recommendations-for-authors">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Accessibility recommendations for authors
														</span>
														<span class="text-sm text-dark">
															Help us to maximize the experience for everyone
														</span>
													</div>
												</div>
											</a>
										</li>
										
									</ul>
								</li>
								<!--
								<li class="nav-item dropdown dropdown-hover mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#"
										id="navbarDropdown2" role="button" data-bs-toggle="dropdown"
										aria-expanded="false">
										Attend
										<img src="/assets/img/down-arrow-dark.svg"
											class="arrow ms-1" alt="">
									</a>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown2">
										<li>
											<a class="dropdown-item border-radius-md" href="#">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Getting started
														</span>
														<span class="text-sm">
															All you need to know to attend the conference
														</span>
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md" href="./registration">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Rates & Registration
														</span>
														<span class="text-sm text-dark">
															First step to attend
														</span>														
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md" href="#">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Accesibility FAQ
														</span>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</li>
								<li class="nav-item dropdown dropdown-hover mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#"
										id="navbarDropdown3" role="button" data-bs-toggle="dropdown"
										aria-expanded="false">
										Program
										<img src="/assets/img/down-arrow-dark.svg"
											class="arrow ms-1" alt="">
									</a>
									<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
										aria-labelledby="navbarDropdown3">
										<li>
											<a class="dropdown-item border-radius-md" href="./schedule">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Schedule
														</span>
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md" href="./keynote-speakers">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Keynote speakers
														</span>
														<span class="text-sm text-dark">
															From the international HCI community
														</span>
													</div>
												</div>
											</a>
										</li>
										<li>
											<a class="dropdown-item border-radius-md" href="./accepted-papers">
												<div class="d-flex">
													<div>
														<span
															class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
															Accepted papers
														</span>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</li>
								
								<li class="nav-item mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										href="./video-archives">
										Video archives
									</a>
								</li>
								-->
								<li class="nav-item mx-2">
									<a class="nav-link ps-2 d-flex cursor-pointer align-items-center"
										href="./organizers">
										Organizers
									</a>
								</li>
								<!--
									<li class="nav-item dropdown dropdown-hover mx-2">
										<a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="#"
											id="navbarDropdown4" role="button" data-bs-toggle="dropdown"
											aria-expanded="false">
											Accesibility
											<img src="/assets/img/down-arrow-dark.svg" alt="down-arrow"
												class="arrow ms-1" alt="">
										</a>
										<ul class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
											aria-labelledby="navbarDropdown4">
											<li>
												<a class="dropdown-item border-radius-md" href="#">
													<div class="d-flex">
														<div>
															<span
																class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																Accesibility FAQ
															</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a class="dropdown-item border-radius-md" href="#">
													<div class="d-flex">
														<div>
															<span
																class="fs-6 dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																Accessibility recommendations for authors
															</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</li>
									-->
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
	<!-- End Navbar -->
</template>