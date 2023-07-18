import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ActivityFeedPageComponent } from './pages/activity-feed-page/activity-feed-page.component';
import { AnnouncementsPageComponent } from './pages/announcements-page/announcements-page.component';
import { APIDocumentationPageComponent } from './pages/apidocumentation-page/apidocumentation-page.component';
import { BillingPageComponent } from './pages/billing-page/billing-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CommunityPageComponent } from './pages/community-page/community-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { FAQPageComponent } from './pages/faqpage/faqpage.component';
import { ForumsPageComponent } from './pages/forums-page/forums-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { HelpCenterPageComponent } from './pages/help-center-page/help-center-page.component';
import { HomepagePageComponent } from './pages/homepage-page/homepage-page.component';
import { InboxPageComponent } from './pages/inbox-page/inbox-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { OrderHistoryPageComponent } from './pages/order-history-page/order-history-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReviewsPageComponent } from './pages/reviews-page/reviews-page.component';
import { RolesAndPermissionsPageComponent } from './pages/roles-and-permissions-page/roles-and-permissions-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { TermsOfServicePageComponent } from './pages/terms-of-service-page/terms-of-service-page.component';
import { UserManagementPageComponent } from './pages/user-management-page/user-management-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { APIDocumentationLayoutComponent } from './layouts/apidocumentation-layout/apidocumentation-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BillingLayoutComponent } from './layouts/billing-layout/billing-layout.component';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { CartLayoutComponent } from './layouts/cart-layout/cart-layout.component';
import { CheckoutLayoutComponent } from './layouts/checkout-layout/checkout-layout.component';
import { CommunityLayoutComponent } from './layouts/community-layout/community-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { EventsLayoutComponent } from './layouts/events-layout/events-layout.component';
import { ForumLayoutComponent } from './layouts/forum-layout/forum-layout.component';
import { GalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout.component';
import { HelpCenterLayoutComponent } from './layouts/help-center-layout/help-center-layout.component';
import { JobsLayoutComponent } from './layouts/jobs-layout/jobs-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { MessagesLayoutComponent } from './layouts/messages-layout/messages-layout.component';
import { NotificationsLayoutComponent } from './layouts/notifications-layout/notifications-layout.component';
import { ProductLayoutComponent } from './layouts/product-layout/product-layout.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { ReviewsLayoutComponent } from './layouts/reviews-layout/reviews-layout.component';
import { SearchResultsLayoutComponent } from './layouts/search-results-layout/search-results-layout.component';
import { SettingsLayoutComponent } from './layouts/settings-layout/settings-layout.component';
import { StorefrontLayoutComponent } from './layouts/storefront-layout/storefront-layout.component';
import { WishlistLayoutComponent } from './layouts/wishlist-layout/wishlist-layout.component';
import { AccordionComponentComponent } from './components/accordion-component/accordion-component.component';
import { AlertsComponentComponent } from './components/alerts-component/alerts-component.component';
import { BackButtonComponentComponent } from './components/back-button-component/back-button-component.component';
import { BadgeComponentComponent } from './components/badge-component/badge-component.component';
import { BreadcrumbComponentComponent } from './components/breadcrumb-component/breadcrumb-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { ButtonGroupComponentComponent } from './components/button-group-component/button-group-component.component';
import { ButtontoggleComponentComponent } from './components/buttontoggle-component/buttontoggle-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { CarouselComponentComponent } from './components/carousel-component/carousel-component.component';
import { CheckboxComponentComponent } from './components/checkbox-component/checkbox-component.component';
import { ChipsComponentComponent } from './components/chips-component/chips-component.component';
import { ClosebuttonComponentComponent } from './components/closebutton-component/closebutton-component.component';
import { CollapseComponentComponent } from './components/collapse-component/collapse-component.component';
import { ConfirmationDialogComponentComponent } from './components/confirmation-dialog-component/confirmation-dialog-component.component';
import { CoreComponentComponent } from './components/core-component/core-component.component';
import { DatepickerComponentComponent } from './components/datepicker-component/datepicker-component.component';
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';
import { DividerComponentComponent } from './components/divider-component/divider-component.component';
import { DropdownComponentComponent } from './components/dropdown-component/dropdown-component.component';
import { ErrorDisplayComponentComponent } from './components/error-display-component/error-display-component.component';
import { ExpansionpanelComponentComponent } from './components/expansionpanel-component/expansionpanel-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { FormfieldComponentComponent } from './components/formfield-component/formfield-component.component';
import { GridlistComponentComponent } from './components/gridlist-component/gridlist-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { IconComponentComponent } from './components/icon-component/icon-component.component';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { JumbotronComponentComponent } from './components/jumbotron-component/jumbotron-component.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { ListgroupComponentComponent } from './components/listgroup-component/listgroup-component.component';
import { LoadingSpinnerComponentComponent } from './components/loading-spinner-component/loading-spinner-component.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { OffcanvasComponentComponent } from './components/offcanvas-component/offcanvas-component.component';
import { PaginatorComponentComponent } from './components/paginator-component/paginator-component.component';
import { PlaceholderComponentComponent } from './components/placeholder-component/placeholder-component.component';
import { PopoverComponentComponent } from './components/popover-component/popover-component.component';
import { ProgressSpinnerComponentComponent } from './components/progress-spinner-component/progress-spinner-component.component';
import { ProgressbarComponentComponent } from './components/progressbar-component/progressbar-component.component';
import { RadiobuttonComponentComponent } from './components/radiobutton-component/radiobutton-component.component';
import { RatingComponentComponent } from './components/rating-component/rating-component.component';
import { RipplesComponentComponent } from './components/ripples-component/ripples-component.component';
import { ScrollspyComponentComponent } from './components/scrollspy-component/scrollspy-component.component';
import { SelectComponentComponent } from './components/select-component/select-component.component';
import { SidenavComponentComponent } from './components/sidenav-component/sidenav-component.component';
import { SlideToggleComponentComponent } from './components/slide-toggle-component/slide-toggle-component.component';
import { SliderComponentComponent } from './components/slider-component/slider-component.component';
import { SnackbarComponentComponent } from './components/snackbar-component/snackbar-component.component';
import { SortHeaderComponentComponent } from './components/sort-header-component/sort-header-component.component';
import { SpinnerComponentComponent } from './components/spinner-component/spinner-component.component';
import { StepperComponentComponent } from './components/stepper-component/stepper-component.component';
import { SuccessDisplayComponentComponent } from './components/success-display-component/success-display-component.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { TabsComponentComponent } from './components/tabs-component/tabs-component.component';
import { ToastsComponentComponent } from './components/toasts-component/toasts-component.component';
import { ToolbarComponentComponent } from './components/toolbar-component/toolbar-component.component';
import { TooltipComponentComponent } from './components/tooltip-component/tooltip-component.component';
import { TreeComponentComponent } from './components/tree-component/tree-component.component';
import { UserAvatarComponentComponent } from './components/user-avatar-component/user-avatar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ActivityFeedPageComponent,
    AnnouncementsPageComponent,
    APIDocumentationPageComponent,
    BillingPageComponent,
    BlogPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    CommunityPageComponent,
    ContactPageComponent,
    DashboardPageComponent,
    EventsPageComponent,
    FAQPageComponent,
    ForumsPageComponent,
    FriendsPageComponent,
    GalleryPageComponent,
    HelpCenterPageComponent,
    HomepagePageComponent,
    InboxPageComponent,
    JobsPageComponent,
    LoginPageComponent,
    MessagesPageComponent,
    NewsPageComponent,
    NotificationsPageComponent,
    OrderHistoryPageComponent,
    PrivacyPolicyPageComponent,
    ProductsPageComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    ReviewsPageComponent,
    RolesAndPermissionsPageComponent,
    SearchResultsPageComponent,
    ServicesPageComponent,
    SettingsPageComponent,
    SupportPageComponent,
    TermsOfServicePageComponent,
    UserManagementPageComponent,
    WishlistPageComponent,
    AdminLayoutComponent,
    APIDocumentationLayoutComponent,
    AuthLayoutComponent,
    BillingLayoutComponent,
    BlogLayoutComponent,
    CartLayoutComponent,
    CheckoutLayoutComponent,
    CommunityLayoutComponent,
    DashboardLayoutComponent,
    DefaultLayoutComponent,
    ErrorLayoutComponent,
    EventsLayoutComponent,
    ForumLayoutComponent,
    GalleryLayoutComponent,
    HelpCenterLayoutComponent,
    JobsLayoutComponent,
    LandingLayoutComponent,
    MessagesLayoutComponent,
    NotificationsLayoutComponent,
    ProductLayoutComponent,
    ProfileLayoutComponent,
    ReviewsLayoutComponent,
    SearchResultsLayoutComponent,
    SettingsLayoutComponent,
    StorefrontLayoutComponent,
    WishlistLayoutComponent,
    AccordionComponentComponent,
    AlertsComponentComponent,
    BackButtonComponentComponent,
    BadgeComponentComponent,
    BreadcrumbComponentComponent,
    ButtonComponentComponent,
    ButtonGroupComponentComponent,
    ButtontoggleComponentComponent,
    CardComponentComponent,
    CarouselComponentComponent,
    CheckboxComponentComponent,
    ChipsComponentComponent,
    ClosebuttonComponentComponent,
    CollapseComponentComponent,
    ConfirmationDialogComponentComponent,
    CoreComponentComponent,
    DatepickerComponentComponent,
    DialogComponentComponent,
    DividerComponentComponent,
    DropdownComponentComponent,
    ErrorDisplayComponentComponent,
    ExpansionpanelComponentComponent,
    FooterComponentComponent,
    FormfieldComponentComponent,
    GridlistComponentComponent,
    HeaderComponentComponent,
    IconComponentComponent,
    InputComponentComponent,
    JumbotronComponentComponent,
    ListComponentComponent,
    ListgroupComponentComponent,
    LoadingSpinnerComponentComponent,
    MainComponentComponent,
    MenuComponentComponent,
    ModalComponentComponent,
    NavbarComponentComponent,
    OffcanvasComponentComponent,
    PaginatorComponentComponent,
    PlaceholderComponentComponent,
    PopoverComponentComponent,
    ProgressSpinnerComponentComponent,
    ProgressbarComponentComponent,
    RadiobuttonComponentComponent,
    RatingComponentComponent,
    RipplesComponentComponent,
    ScrollspyComponentComponent,
    SelectComponentComponent,
    SidenavComponentComponent,
    SlideToggleComponentComponent,
    SliderComponentComponent,
    SnackbarComponentComponent,
    SortHeaderComponentComponent,
    SpinnerComponentComponent,
    StepperComponentComponent,
    SuccessDisplayComponentComponent,
    TableComponentComponent,
    TabsComponentComponent,
    ToastsComponentComponent,
    ToolbarComponentComponent,
    TooltipComponentComponent,
    TreeComponentComponent,
    UserAvatarComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
