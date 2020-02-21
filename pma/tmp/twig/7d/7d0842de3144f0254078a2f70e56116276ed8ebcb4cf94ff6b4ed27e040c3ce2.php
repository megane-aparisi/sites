<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* database/designer/edit_delete_pages.twig */
class __TwigTemplate_170301d74df1386a05f9fe7fa49445bebf3016dac7684b6a3bb9c2f8cc3b1804 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<form action=\"db_designer.php\" method=\"post\" name=\"edit_delete_pages\" id=\"edit_delete_pages\" class=\"ajax\">
    ";
        // line 2
        echo PhpMyAdmin\Url::getHiddenInputs(($context["db"] ?? null));
        echo "
    <fieldset id=\"page_edit_delete_options\">
        <input type=\"hidden\" name=\"operation\" value=\"";
        // line 4
        echo twig_escape_filter($this->env, ($context["operation"] ?? null), "html", null, true);
        echo "\">
        <label for=\"selected_page\">
            ";
        // line 6
        echo twig_escape_filter($this->env, (((($context["operation"] ?? null) == "editPage")) ? (_gettext("Page to open")) : (_gettext("Page to delete"))), "html", null, true);
        echo ":
        </label>
        ";
        // line 8
        $this->loadTemplate("database/designer/page_selector.twig", "database/designer/edit_delete_pages.twig", 8)->display(twig_to_array(["pdfwork" =>         // line 9
($context["pdfwork"] ?? null), "pages" =>         // line 10
($context["pages"] ?? null)]));
        // line 12
        echo "    </fieldset>
</form>
";
    }

    public function getTemplateName()
    {
        return "database/designer/edit_delete_pages.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  59 => 12,  57 => 10,  56 => 9,  55 => 8,  50 => 6,  45 => 4,  40 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "database/designer/edit_delete_pages.twig", "/home/waa2/sites/pma/templates/database/designer/edit_delete_pages.twig");
    }
}
