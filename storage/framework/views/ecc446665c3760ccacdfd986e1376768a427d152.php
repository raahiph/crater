<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <title><?php echo e(get_page_title(!Request::header('company'))); ?></title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="manifest" href="/favicons/site.webmanifest">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5851d8">
    <link rel="shortcut icon" href="/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <!-- Module Styles -->
    <?php $__currentLoopData = \Crater\Services\Module\ModuleFacade::allStyles(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $name => $path): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <link rel="stylesheet" href="/modules/styles/<?php echo e($name); ?>">
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    <?php echo vite_tags() ?>
</head>

<body
    class="h-full overflow-hidden bg-gray-100 font-base
    <?php if(isset($current_theme)): ?> theme-<?php echo e($current_theme); ?> <?php else: ?> theme-<?php echo e(get_app_setting('admin_portal_theme') ?? 'crater'); ?> <?php endif; ?> ">

    <!-- Module Scripts -->
    <?php $__currentLoopData = \Crater\Services\Module\ModuleFacade::allScripts(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $name => $path): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if(\Illuminate\Support\Str::startsWith($path, ['http://', 'https://'])): ?>
            <script type="module" src="<?php echo $path; ?>"></script>
        <?php else: ?>
            <script type="module" src="/modules/scripts/<?php echo e($name); ?>"></script>
        <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    <script type="module">
        <?php if(isset($customer_logo)): ?>

        window.customer_logo = "/storage/<?php echo e($customer_logo); ?>"

        <?php endif; ?>
        <?php if(isset($login_page_logo)): ?>

        window.login_page_logo = "/storage/<?php echo e($login_page_logo); ?>"

        <?php endif; ?>
        <?php if(isset($login_page_heading)): ?>

        window.login_page_heading = "<?php echo e($login_page_heading); ?>"

        <?php endif; ?>
        <?php if(isset($login_page_description)): ?>

        window.login_page_description = "<?php echo e($login_page_description); ?>"

        <?php endif; ?>     
        <?php if(isset($copyright_text)): ?>

        window.copyright_text = "<?php echo e($copyright_text); ?>"

        <?php endif; ?>    

        window.Crater.start()
    </script>
</body>

</html>
<?php /**PATH C:\xampp\htdocs\crater2\resources\views/app.blade.php ENDPATH**/ ?>